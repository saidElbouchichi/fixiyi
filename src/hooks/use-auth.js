import { useEffect } from "react";
import { useAuthStore } from "@/stores/auth-store";
import { authService } from "@/services/auth-service";
export function useAuth() {
    const { user, profile, isLoading, setUser, setProfile, setIsLoading, reset } = useAuthStore();
    useEffect(() => {
        let mounted = true;
        const initAuth = async () => {
            try {
                const { data: { session }, } = await supabase.auth.getSession();
                if (mounted) {
                    if (session?.user) {
                        setUser(session.user);
                        const userProfile = await authService.getProfile(session.user.id);
                        setProfile(userProfile);
                    }
                    setIsLoading(false);
                }
            }
            catch (error) {
                console.error("Auth initialization error:", error);
                if (mounted) {
                    setIsLoading(false);
                }
            }
        };
        initAuth();
        const { data: authListener } = authService.onAuthStateChange(async (authUser) => {
            if (mounted) {
                setUser(authUser);
                if (authUser) {
                    try {
                        const userProfile = await authService.getProfile(authUser.id);
                        setProfile(userProfile);
                    }
                    catch (error) {
                        console.error("Failed to load profile:", error);
                    }
                }
                else {
                    setProfile(null);
                }
            }
        });
        return () => {
            mounted = false;
            authListener?.subscription.unsubscribe();
        };
    }, [setUser, setProfile, setIsLoading]);
    return {
        user,
        profile,
        isLoading,
        isAuthenticated: !!user,
        reset,
    };
}
import { supabase } from "@/lib/supabase";

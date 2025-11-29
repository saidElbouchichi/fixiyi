import { supabase } from "@/lib/supabase";
export const authService = {
    async signUp(data) {
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
        });
        if (authError)
            throw authError;
        if (!authData.user)
            throw new Error("Failed to create user");
        const { error: profileError } = await supabase.from("profiles").insert({
            id: authData.user.id,
            email: data.email,
            full_name: data.fullName,
            user_type: data.userType,
        });
        if (profileError)
            throw profileError;
        return authData;
    },
    async signIn(data) {
        const { data: authData, error } = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
        });
        if (error)
            throw error;
        return authData;
    },
    async signOut() {
        const { error } = await supabase.auth.signOut();
        if (error)
            throw error;
    },
    async getProfile(userId) {
        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", userId)
            .maybeSingle();
        if (error)
            throw error;
        return data;
    },
    async updateProfile(userId, updates) {
        const { data, error } = await supabase
            .from("profiles")
            .update(updates)
            .eq("id", userId)
            .select()
            .single();
        if (error)
            throw error;
        return data;
    },
    onAuthStateChange(callback) {
        return supabase.auth.onAuthStateChange((_event, session) => {
            (async () => {
                callback(session?.user ?? null);
            })();
        });
    },
};

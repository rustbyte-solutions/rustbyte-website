import React, { createContext, useContext } from 'react';
import supabase from '../supabase';

const SupabaseContext = createContext(supabase);

interface SupabaseProviderProps {
    children: React.ReactNode
}

export const useSupabaseClient = () => {
    return useContext(SupabaseContext);
};

export const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
    children
}) => {
    return (
        <SupabaseContext.Provider value={supabase}>
            {children}
        </SupabaseContext.Provider>
    )
}

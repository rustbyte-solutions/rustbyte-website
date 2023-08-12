import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASEURL
const supabaseAnonkey = import.meta.env.PUBLIC_ANONKEY

const supabase = createClient(supabaseUrl, supabaseAnonkey)

export default supabase;
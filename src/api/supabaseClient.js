import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sddqzqtfvxepafdefrmd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkZHF6cXRmdnhlcGFmZGVmcm1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3Mzk4MjYsImV4cCI6MjAxNDMxNTgyNn0.PCoC9dTfbEuh3b6twzVN_XI_1GWx2HgD0Fl2czzZfZA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

-- Create table for invite request form submissions
CREATE TABLE public.invite_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  title TEXT NOT NULL,
  email TEXT NOT NULL,
  track TEXT NOT NULL,
  challenge TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.invite_requests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public form, no auth required)
CREATE POLICY "Anyone can submit an invite request"
  ON public.invite_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);
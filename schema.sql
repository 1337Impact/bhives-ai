
--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 16.3

-- Started on 2024-07-14 21:18:42

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE ROLE admin WITH
  LOGIN
  CONNECTION LIMIT -1;

--
-- TOC entry 15 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 3809 (class 0 OID 0)
-- Dependencies: 15
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 300 (class 1259 OID 29162)
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    title text DEFAULT ''::text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    slug text NOT NULL
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- TOC entry 301 (class 1259 OID 29225)
-- Name: posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.posts (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    category_id uuid,
    title text,
    image text,
    description text,
    content text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    slug text DEFAULT ''::text,
    author_id uuid,
    published boolean DEFAULT false,
    tags text[]
);


ALTER TABLE public.posts OWNER TO postgres;

--
-- TOC entry 299 (class 1259 OID 29125)
-- Name: profiles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.profiles (
    id uuid NOT NULL,
    updated_at timestamp with time zone,
    username text,
    full_name text,
    avatar_url text,
    website text,
    CONSTRAINT username_length CHECK ((char_length(username) >= 3))
);


ALTER TABLE public.profiles OWNER TO postgres;

--
-- TOC entry 3637 (class 2606 OID 29171)
-- Name: categories category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- TOC entry 3639 (class 2606 OID 29235)
-- Name: posts post_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT post_pkey PRIMARY KEY (id);


--
-- TOC entry 3641 (class 2606 OID 29237)
-- Name: posts post_slug_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT post_slug_key UNIQUE (slug);


--
-- TOC entry 3633 (class 2606 OID 29132)
-- Name: profiles profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_pkey PRIMARY KEY (id);


--
-- TOC entry 3635 (class 2606 OID 29134)
-- Name: profiles profiles_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_username_key UNIQUE (username);


--
-- TOC entry 3643 (class 2606 OID 29238)
-- Name: posts posts_author_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.profiles(id);


--
-- TOC entry 3644 (class 2606 OID 29243)
-- Name: posts posts_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- TOC entry 3642 (class 2606 OID 29135)
-- Name: profiles profiles_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id);


--
-- TOC entry 3800 (class 3256 OID 30219)
-- Name: categories all_admin; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY all_admin ON public.categories USING ((auth.role() = 'admin'::text));


--
-- TOC entry 3798 (class 3256 OID 30197)
-- Name: posts all_admin; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY all_admin ON public.posts USING ((auth.role() = 'admin'::text));


--
-- TOC entry 3802 (class 3256 OID 30241)
-- Name: profiles all_admin; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY all_admin ON public.profiles USING ((auth.role() = 'admin'::text));


--
-- TOC entry 3795 (class 0 OID 29162)
-- Dependencies: 300
-- Name: categories; Type: ROW SECURITY; Schema: public; Owner: postgres
--

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

--
-- TOC entry 3796 (class 0 OID 29225)
-- Dependencies: 301
-- Name: posts; Type: ROW SECURITY; Schema: public; Owner: postgres
--

ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

--
-- TOC entry 3794 (class 0 OID 29125)
-- Dependencies: 299
-- Name: profiles; Type: ROW SECURITY; Schema: public; Owner: postgres
--

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

--
-- TOC entry 3799 (class 3256 OID 30218)
-- Name: categories select_anon; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY select_anon ON public.categories FOR SELECT USING ((auth.role() = 'anon'::text));


--
-- TOC entry 3797 (class 3256 OID 30196)
-- Name: posts select_anon; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY select_anon ON public.posts FOR SELECT USING ((auth.role() = 'anon'::text));


--
-- TOC entry 3801 (class 3256 OID 30240)
-- Name: profiles select_anon; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY select_anon ON public.profiles FOR SELECT USING ((auth.role() = 'anon'::text));


--
-- TOC entry 3810 (class 0 OID 0)
-- Dependencies: 15
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: pg_database_owner
--

GRANT USAGE ON SCHEMA public TO postgres;
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT USAGE ON SCHEMA public TO service_role;


--
-- TOC entry 3811 (class 0 OID 0)
-- Dependencies: 300
-- Name: TABLE categories; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.categories TO anon;
GRANT ALL ON TABLE public.categories TO authenticated;
GRANT ALL ON TABLE public.categories TO service_role;
GRANT ALL ON TABLE public.categories TO admin;


--
-- TOC entry 3812 (class 0 OID 0)
-- Dependencies: 301
-- Name: TABLE posts; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.posts TO anon;
GRANT ALL ON TABLE public.posts TO authenticated;
GRANT ALL ON TABLE public.posts TO service_role;
GRANT ALL ON TABLE public.posts TO admin;


--
-- TOC entry 3813 (class 0 OID 0)
-- Dependencies: 299
-- Name: TABLE profiles; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.profiles TO anon;
GRANT ALL ON TABLE public.profiles TO authenticated;
GRANT ALL ON TABLE public.profiles TO service_role;
GRANT ALL ON TABLE public.profiles TO admin;


--
-- TOC entry 2477 (class 826 OID 16484)
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES TO service_role;



--
-- TOC entry 2476 (class 826 OID 16483)
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: public; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS TO service_role;



--
-- TOC entry 2475 (class 826 OID 16482)
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES TO service_role;



-- Completed on 2024-07-14 21:18:54

--
-- PostgreSQL database dump complete
--




grant admin to authenticator;
grant anon to admin;

UPDATE auth.users SET role = 'admin' WHERE email = 'admin@bhives.ai';

alter table storage.objects enable row level security;

create policy objects_select_policy on storage.objects for select using (auth.role() = 'anon');

-- Create a policy to allow authenticated users to upload to any bucket
CREATE POLICY "allow authenticated uploads" 
ON storage.objects 
FOR INSERT
WITH CHECK (
  auth.role() = 'authenticated'
);

-- Create a policy to allow authenticated users to read from any bucket
CREATE POLICY "allow authenticated read" 
ON storage.objects 
FOR SELECT
USING (
  auth.role() = 'authenticated'
);

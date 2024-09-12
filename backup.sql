--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4 (Postgres.app)
-- Dumped by pg_dump version 16.4 (Postgres.app)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: menu; Type: TABLE; Schema: public; Owner: saadal-ageel
--

CREATE TABLE public.menu (
    menu_id bigint NOT NULL,
    calories integer,
    category character varying(255),
    description character varying(255),
    img_url character varying(255),
    m_name character varying(255),
    price double precision NOT NULL,
    fk_res_id bigint NOT NULL
);


ALTER TABLE public.menu OWNER TO "saadal-ageel";

--
-- Name: menu_seq; Type: SEQUENCE; Schema: public; Owner: saadal-ageel
--

CREATE SEQUENCE public.menu_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.menu_seq OWNER TO "saadal-ageel";

--
-- Name: res_seq; Type: SEQUENCE; Schema: public; Owner: saadal-ageel
--

CREATE SEQUENCE public.res_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.res_seq OWNER TO "saadal-ageel";

--
-- Name: resturant; Type: TABLE; Schema: public; Owner: saadal-ageel
--

CREATE TABLE public.resturant (
    res_id bigint NOT NULL,
    lat double precision NOT NULL,
    lon double precision NOT NULL,
    resturant_name character varying(255),
    type character varying(255),
    image character varying(255)
);


ALTER TABLE public.resturant OWNER TO "saadal-ageel";

--
-- Data for Name: menu; Type: TABLE DATA; Schema: public; Owner: saadal-ageel
--

COPY public.menu (menu_id, calories, category, description, img_url, m_name, price, fk_res_id) FROM stdin;
8	55	Appatizers	A jordanian hummas contains peas, olive oil, and few arabic herbs	https://cdn.loveandlemons.com/wp-content/uploads/2024/08/hummus-recipe.jpg	Hummas	5	1
7	1700	Chicken	10 pieces Mosahab, with garlic sauce and fries	https://www.biltafsil.com/wp-content/uploads/2022/07/%D9%85%D8%B3%D8%AD%D8%A8-%D8%A7%D9%84%D8%A8%D9%8A%D9%83.jpg	10 pieces Mosahab	28	1
6	1078	Chicken	7 pieces Mosahab, with garlic sauce and fries	https://www.biltafsil.com/wp-content/uploads/2022/07/%D9%85%D8%B3%D8%AD%D8%A8-%D8%A7%D9%84%D8%A8%D9%8A%D9%83.jpg	7 pieces Mosahab	16	1
3	320	Appatizers	Grape leaves stuffed with rice	https://www.simplyleb.com/wp-content/uploads/Vegetarian-Stuffed-Grape-Leaves-20.jpg	Grape leaves	15.99	1
\.


--
-- Data for Name: resturant; Type: TABLE DATA; Schema: public; Owner: saadal-ageel
--

COPY public.resturant (res_id, lat, lon, resturant_name, type, image) FROM stdin;
1	24.7742	46.738586	Al Baik	chicken	https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Al_Baik_Logo.svg/440px-Al_Baik_Logo.svg.png
2	24.7850877	46.4484705	sushi yoshi	sushi	https://competition.adesignaward.com/designs/56d4c1a8fecd6607137d23d6ee7333ba3500af87-thumb-big.jpg
3	24.7762	46.6385	Myazu	sushi	https://www.myazu.com/wp-content/uploads/2020/10/myazu-logo.png
\.


--
-- Name: menu_seq; Type: SEQUENCE SET; Schema: public; Owner: saadal-ageel
--

SELECT pg_catalog.setval('public.menu_seq', 8, true);


--
-- Name: res_seq; Type: SEQUENCE SET; Schema: public; Owner: saadal-ageel
--

SELECT pg_catalog.setval('public.res_seq', 3, true);


--
-- Name: menu menu_pkey; Type: CONSTRAINT; Schema: public; Owner: saadal-ageel
--

ALTER TABLE ONLY public.menu
    ADD CONSTRAINT menu_pkey PRIMARY KEY (menu_id);


--
-- Name: resturant resturant_pkey; Type: CONSTRAINT; Schema: public; Owner: saadal-ageel
--

ALTER TABLE ONLY public.resturant
    ADD CONSTRAINT resturant_pkey PRIMARY KEY (res_id);


--
-- Name: menu fkeb4g0qn3wmuvggm188gxlkpnt; Type: FK CONSTRAINT; Schema: public; Owner: saadal-ageel
--

ALTER TABLE ONLY public.menu
    ADD CONSTRAINT fkeb4g0qn3wmuvggm188gxlkpnt FOREIGN KEY (fk_res_id) REFERENCES public.resturant(res_id);


--
-- PostgreSQL database dump complete
--


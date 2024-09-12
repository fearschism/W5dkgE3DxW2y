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

--
-- Insert additional categories and menu items for each restaurant
--

INSERT INTO public.menu (menu_id, calories, category, description, img_url, m_name, price, fk_res_id) VALUES
(8, 55, 'Appetizers', 'A Jordanian hummus containing peas, olive oil, and a few Arabic herbs', 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Lebanese_style_hummus.jpg', 'Hummus', 5, 1),
(7, 1700, 'Chicken', '10 pieces Mosahab, with garlic sauce and fries', 'https://e4a84wdfhho.exactdn.com/wp-content/uploads/2023/07/%D9%85%D9%86%D9%8A%D9%88-%D9%85%D8%B7%D8%B9%D9%85-%D8%A7%D9%84%D8%A8%D9%8A%D9%83-%D8%AD%D8%A7%D8%A6%D9%84.webp?strip=all&lossy=1&resize=1280%2C720&ssl=1', '10 pieces Mosahab', 28, 1),
(6, 1078, 'Chicken', '7 pieces Mosahab, with garlic sauce and fries', 'https://e4a84wdfhho.exactdn.com/wp-content/uploads/2023/07/%D9%85%D9%86%D9%8A%D9%88-%D9%85%D8%B7%D8%B9%D9%85-%D8%A7%D9%84%D8%A8%D9%8A%D9%83-%D8%AD%D8%A7%D8%A6%D9%84.webp?strip=all&lossy=1&resize=1280%2C720&ssl=1', '7 pieces Mosahab', 16, 1),
(3, 320, 'Appetizers', 'Grape leaves stuffed with rice', 'https://www.themediterraneandish.com/wp-content/uploads/2019/12/Stuffed-Grape-Leaves-Recipe-Dolmas-15.jpg', 'Grape leaves', 15.99, 1),
(9, 1600, 'Chicken', 'Grilled chicken shawarma with garlic sauce and pickles', 'https://hips.hearstapps.com/hmg-prod/images/singleimagebug-chicken-shawarma-pin-1549421288.jpg?crop=1.00xw:0.632xh;0,0.220xh&resize=980:*', 'Chicken Shawarma', 12, 1),
(10, 300, 'Drinks', 'Fresh lemon juice with mint', 'https://forksandfoliage.com/wp-content/uploads/2022/07/lebanese-mint-lemonade-4.jpg', 'Lemon Mint Juice', 3, 1),
(11, 500, 'Desserts', 'Traditional baklava with honey and nuts', 'https://www.simplyrecipes.com/thmb/GjaB8D6OyVIAfA_BpGuXr-6eNBU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Baklava-LEAD-11-b2a228e6db9f43d697ae3aed378d0b2a.jpg', 'Baklava', 5, 1),
(20, 1400, 'Chicken', 'Grilled chicken served with garlic sauce and fries', 'https://www.wellplated.com/wp-content/uploads/2021/05/Best-Grilled-Chicken-Breast.jpg', 'Grilled Chicken', 20, 1),
(21, 1800, 'Chicken', 'Deep-fried chicken nuggets with fries and ketchup', 'https://www.kitchenathoskins.com/wp-content/uploads/2020/09/air-fryer-chicken-nuggets-27-1-1.jpg', 'Chicken Nuggets', 15, 1),
(12, 200, 'Sushi', 'Salmon Nigiri with soy sauce', 'https://izzycooking.com/wp-content/uploads/2020/10/Salmon-Nigiri-1.jpg', 'Salmon Nigiri', 8, 2),
(13, 150, 'Sushi', 'Spicy tuna roll with avocado and cucumber', 'https://www.tiger-corporation.com/wp-content/uploads/2023/02/hero-img-recipe-spicy-tuna-3db6e125056f2bde01321a3da5d290da.jpg', 'Spicy Tuna Roll', 10, 2),
(14, 100, 'Drinks', 'Green tea served hot', '', 'Green Tea', 2, 2),
(15, 250, 'Desserts', 'Mochi ice cream with red bean filling', 'https://www.rainbownourishments.com/wp-content/uploads/2023/06/vegan-strawberry-mochi-ice-cream-1.jpg', 'Mochi Ice Cream', 4, 2),
(16, 220, 'Sushi', 'Yellowtail Sashimi with ponzu sauce', 'https://honest-food.net/wp-content/uploads/2022/08/hamachi-sashimi.jpg', 'Yellowtail Sashimi', 14, 3),
(17, 180, 'Sushi', 'Dragon roll with eel and avocado', 'https://www.justonecookbook.com/wp-content/uploads/2020/06/Dragon-Roll-0293-II.jpg', 'Dragon Roll', 16, 3),
(18, 300, 'Desserts', 'Tempura ice cream with chocolate drizzle', 'https://www.thespruceeats.com/thmb/DD08BlbajUwkaUB8A-1za_ejf_g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fried-ice-cream-recipe-5181226-hero-01-56bf6505360c407998eece1b97865a96.jpg', 'Tempura Ice Cream', 7, 3),
(19, 150, 'Drinks', 'Cold matcha latte with soy milk', 'https://www.foodandwine.com/thmb/JoA2p5STHS8aO2nmyrwYKRojEc0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Iced-Matcha-Latte-FT-RECIPE0622-2000-9c2e116d3bc54bdaacda10e62e8e0205.jpg', 'Matcha Latte', 5, 3);




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


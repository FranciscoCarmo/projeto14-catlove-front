const products = [
    {
        name: "Ração Seca Nutrilus Pro Carne para Gatos Adultos - 10,1Kg",
        image: "https://www.petlove.com.br/images/products/250518/small/2661128_FRENTE.jpg?1635791683",
        price: "13671",
        category: "rações",
    },
    {
        name: "Ração Royal Canin Sterilised para Gatos Adultos Castrados - 10,1Kg",
        image: "https://www.petlove.com.br/images/products/224004/small/Ra%C3%A7%C3%A3o_Royal_Canin_Sterilised_para_Gatos_Adultos_Castrados_31022932.jpg?1627717840",
        price: "44798",
        category: "rações",
    },
    {
        name: "Ração Seca Nutrilus Pro Salmão para Gatos Adultos Castrados - 10,1Kg",
        image: "https://www.petlove.com.br/images/products/250521/small/2661134_FRENTE.jpg?1635792669",
        price: "15561",
        category: "rações",
    },
    {
        name: "Ração Whiskas Carne para Gatos Adultos Castrados - 10,1Kg",
        image: "https://www.petlove.com.br/images/products/258569/small/RAOWHI_4.JPG?1658246240",
        price: "18999",
        category: "rações",
    },
    {
        name: "Ração Seca Nutrilus Pro Frango para Gatos Adultos Castrados - 10,1Kg",
        image: "https://www.petlove.com.br/images/products/250520/small/2661132_FRENTE.jpg?1635792614",
        price: "15021",
        category: "rações",
    },
    {
        name: "Ração Seca Nestlé Purina Pro Plan Trato Urinário Frango para Gatos Adultos - 7,5Kg",
        image: "https://www.petlove.com.br/images/products/230365/small/Ra%C3%A7%C3%A3o_Seca_Nestl%C3%A9_Purina_Pro_Plan_Trato_Urin%C3%A1rio_Frango_para_Gatos_Adultos_31010441_7_5kg.jpg?1627735590",
        price: "23119",
        category: "rações",
    },
    {
        name: "Ração Seca Optimum Frango para Gatos Adultos Castrados - 10,1Kg",
        image: "https://www.petlove.com.br/images/products/248703/small/_0024_Ra%C3%A7%C3%A3o_Optimum_para_Gatos_Adultos_Castrados_1__anos_Frango_10_1_kg_2034869_59.jpg?1633705178",
        price: "16199",
        category: "rações",
    },
    {
        name: "Ração Total Equilíbrio para Gatos Castrados Adultos de 1 A 7 Anos - 7,5Kg",
        image: "https://www.petlove.com.br/images/products/189580/small/Ra%C3%A7%C3%A3o-Total-Equil%C3%ADbrio-para-Gatos-Castrados-Adultos-de-1-A-7-Anos.jpg?1627612262",
        price: "23399",
        category: "rações",
    },
    {
        name: "Ração Seca PremieR Pet Golden Salmão para Gatos Adultos Castrados - 10,1Kg",
        image: "https://www.petlove.com.br/images/products/261684/small/Ra%C3%A7%C3%A3o_Seca_PremieR_Pet_Golden_Salm%C3%A3o_para_Gatos_Adultos_Castrados_-_10_1_Kg_31022435-3_2.jpg?1662035152",
        price: "17690",
        category: "rações",
    },
    {
        name: "Ração Royal Canin Premium Cat para Gatos Adultos Castrados - 10,1Kg",
        image: "https://www.petlove.com.br/images/products/177801/small/Ra%C3%A7%C3%A3o-Royal-Canin-Premium-Cat-para-Gatos-Adultos-Castrados.jpg?1627584785",
        price: "34499",
        category: "rações",
    },
    {
        name: "Petisco Whiskas Temptations Antibola de Pelo para Gatos Adultos - 40 g",
        image: "https://www.petlove.com.br/images/products/186423/small/Whiskas_Petisco_Temptations_AntiBoladePelo_3100683.jpg?1627604717",
        price: "1099",
        category: "petiscos",
    },
    {
        name: "Petisco Dreamies Carne Para Gatos Adultos - 40 g",
        image: "https://www.petlove.com.br/images/products/213552/small/Petisco_Dreamies_Carne_-_40_g_3100940_1.jpg?1627685499",
        price: "699",
        category: "petiscos",
    },
    {
        name: "Petisco Nestlé Purina DentaLife para Gatos - 40 g",
        image: "https://www.petlove.com.br/images/products/196009/small/Petisco_Nestl%C3%A9_Purina_DentaLife_para_Gatos_1647285.jpg?1627628991",
        price: "869",
        category: "petiscos",
    },
    {
        name: "Petisco Dreamies Frango Para Gatos Adultos - 40 g",
        image: "https://www.petlove.com.br/images/products/213557/small/Petisco_Dreamies_Frango_-_40_g_3100941_1.jpg?1627685527",
        price: "699",
        category: "petiscos",
    },
    {
        name: "Petisco Nestlé Purina Party Mix Frango, Fígado e Peru para Gatos Adultos - 40 g",
        image: "https://www.petlove.com.br/images/products/182945/small/3110184-BAIXA.jpg?1627596465",
        price: "799",
        category: "petiscos",
    },
    {
        name: "Petisco Nestlé Purina Friskies Party Mix Camarão, Salmão e Atum para Gatos Adultos - 40 g",
        image: "https://www.petlove.com.br/images/products/182920/small/3110185.jpg?1627596393",
        price: "699",
        category: "petiscos",
    },
    {
        name: "Petisco Kelco Kelcat Bastoncitos Carne - 30 g",
        image: "https://www.petlove.com.br/images/products/245782/small/Petisco_Kelco_Kelcat_Bifitos_Carne_3105872_1.jpg?1631098137",
        price: "550",
        category: "petiscos",
    },
    {
        name: "Petisco Nestlé Purina Friskies Party Mix Cordeiro, Carne Suína e Carne para Gatos Adultos - 40 g",
        image: "https://www.petlove.com.br/images/products/227632/small/Petisco_Nestl%C3%A9_Purina_Friskies_Party_Mix_Cordeiro__Carne_Su%C3%ADna_e_Carne_para_Gatos_Adultos_2540465.jpg?1627728000",
        price: "699",
        category: "petiscos",
    },
    {
        name: "Sorvete Ipet Gellato Sabor Iogurte para Gatos - 30 g",
        image: "https://www.petlove.com.br/images/products/258383/small/Sorvete_Ipet_Gellato_Sabor_Iogurte_para_Gatos_-_30_g_2497389_1.jpg?1657738709",
        price: "250",
        category: "petiscos",
    },
    {
        name: "Snacks Nats Cats 3 em 1 para Gatos - 60 g",
        image: "https://www.petlove.com.br/images/products/233105/small/Snacks_Nats_Cats_3_em_1_para_Gatos_2603518.jpg?1627747579",
        price: "899",
        category: "petiscos",
    },
    {
        name: "Brinquedo LCM Varinha Cat Fishing Azul para Gato - Azul",
        image: "https://www.petlove.com.br/images/products/199874/small/Brinquedo_Cat_LCM_Fishing_-_Azul_1951315.jpg?1627642006",
        price: "1439",
        category: "brinquedos",
    },
    {
        name: "Brinquedo The Pets Brasil Ratinho Real de Corda - Tam. Único",
        image: "https://www.petlove.com.br/images/products/200116/small/Brinquedo_The_Pets_Brasil_Ratinho_Real_de_Corda_1962834.jpg?1627642647",
        price: "1999",
        category: "brinquedos",
    },
    {
        name: "Brinquedo LCM Bolinha Cat Toy Rústico Marrom para Gato - Marrom",
        image: "https://www.petlove.com.br/images/products/199619/small/Brinquedo_Bolinha_LCM_Cat_Toy_R%C3%BAstico_-_Marrom_1951728.jpg?1627641106",
        price: "999",
        category: "brinquedos",
    },
    {
        name: "Brinquedo Galo para Gatos Cores Sortidas - Tam. Único",
        image: "https://www.petlove.com.br/images/products/232451/small/Brinquedo_Galo_para_Gatos__2589705.jpg?1627745530",
        price: "1250",
        category: "brinquedos",
    },
    {
        name: "Brinquedo LCM Bola de Tênis Mini Amarela - Tam. Único",
        image: "https://www.petlove.com.br/images/products/199630/small/Brinquedo_Bola_LCM_Mini_T%C3%AAnis_-_Amarela_1951320.jpg?1627641152",
        price: "999",
        category: "brinquedos",
    },
    {
        name: "Bolas Chalesco com Catnip",
        image: "https://www.petlove.com.br/images/products/183231/small/3105828.jpg?1627597058",
        price: "1990",
        category: "brinquedos",
    },
    {
        name: "Brinquedo JW Footbal With Streamer Vermelho - Tam. Único",
        image: "https://www.petlove.com.br/images/products/192742/small/Brinquedo_JW_Cat_Footbal_With_Streamer_1738610_1.jpg?1627619666",
        price: "4699",
        category: "brinquedos",
    },
    {
        name: "Brinquedo JW Feather Ball - Verde",
        image: "https://www.petlove.com.br/images/products/192740/small/Brinquedo_JW_Cat_Feather_Ball_1738590_1.jpg?1627619658",
        price: "2280",
        category: "brinquedos",
    },
    {
        name: "Brinquedo Pet Games Toca Octa Cat - Tam. Único",
        image: "https://www.petlove.com.br/images/products/174861/small/7898615850768_7.jpg?1627575220",
        price: "5790",
        category: "brinquedos",
    },
    {
        name: "Brinquedo Túnel Chalesco com 3 Saídas - Tam. Único",
        image: "https://www.petlove.com.br/images/products/256390/small/3104408_-__Brinquedo_Chalesco_T%C3%BAnel_com_3_Sa%C3%ADdas.png?1654109452",
        price: "11876",
        category: "brinquedos",
    },
    {
        name: "Brinquedo Paper Balls com Dispenser de Ração para Gatos - 3 Unidades",
        image: "https://www.petlove.com.br/images/products/233605/small/Brinquedo_Paper_Balls_com_Dispenser_de_Ra%C3%A7%C3%A3o_para_Gatos_2618562.jpg?1627748998",
        price: "995",
        category: "brinquedos",
    },
    {
        name: "Bandeja Higiênica Furacão Pet Classic Preta para Gatos - Tam. Único",
        image: "https://www.petlove.com.br/images/products/180988/small/311712_1.jpg?1627592652",
        price: "2290",
        category: "higiene",
    },
    {
        name: "Bandeja de Areia Chalesco Vermelho para Gatos - Tam. 01",
        image: "https://www.petlove.com.br/images/products/172568/small/BandejaparaGatos_Vermelho.jpg?1627567965",
        price: "4990",
        category: "higiene",
    },
    {
        name: "Banheira Furacão Pet Furba para Gatos - Preta",
        image: "https://www.petlove.com.br/images/products/220251/small/Banheira_Furac%C3%A3o_Pet_Furba_Preta_para_Gatos_1698719.jpg?1627705525",
        price: "14490",
        category: "higiene",
    },
    {
        name: "Banheira Gato Furacão Pet Classic Plus - Rosa",
        image: "https://www.petlove.com.br/images/products/242362/small/2152256_Banheira_Gato_Furac%C3%A3o_Pet_Classic_Plus_Rosa.jpg?1627922987",
        price: "6890",
        category: "higiene",
    },
    {
        name: "Areia Sanitária Me.Au Pet Grãos Finos para Gatos - 4Kg",
        image: "https://www.petlove.com.br/images/products/250533/small/2492359.jpg?1635795887",
        price: "1290",
        category: "higiene",
    },
    {
        name: "Areia Sílica Me.Au Pet Cristais Médios para Gatos - 1,8Kg",
        image: "https://www.petlove.com.br/images/products/250528/small/2492356.jpg?1635795576",
        price: "4303",
        category: "higiene",
    },
    {
        name: "Granulado de Madeira Me.Au Pet para Gatos - 2,5Kg",
        image: "https://www.petlove.com.br/images/products/250926/small/2679307_Granulado-Madeira-2.5.jpg?1636403496",
        price: "834",
        category: "higiene",
    },
    {
        name: "Areia Sanitária Classic Pipicat - 4Kg",
        image: "https://www.petlove.com.br/images/products/259976/small/Areia_Sanit%C3%A1ria_Classic_Pipicat_-_4_Kg_3107702_0003_1.jpg?1659535695",
        price: "1490",
        category: "higiene",
    },
    {
        name: "Sacos Higiênicos Alfapet Kets para Bandeja - 8 Unidades",
        image: "https://www.petlove.com.br/images/products/225311/small/2513314.jpg?1627722562",
        price: "1260",
        category: "higiene",
    },
    {
        name: "Kit Areia Sanitária Me.Au Pet Grãos Médios para Gatos 4Kg - 12Kg (3 Unidades)",
        image: "https://www.petlove.com.br/images/products/250531/small/2554160.jpg?1635795676",
        price: "3690",
        category: "higiene",
    },
];

//colocar o array e a função no products controller

async function produtos(req, res) {
    try {
        products.map((e) => {
            return db.collection("produtos").insertOne(e);
        });
    } catch (error) {
        return console.error(error);
    }
    res.send("ok");
}

//coocar no products.router:

router.post("/produtos", produtos);

import {} from "../controllers/productsController.js";

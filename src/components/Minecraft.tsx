import "../styles/minecraftStyles/styles.css";

const images = {
    0: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293659/1_p1fkha.webp",
        altText: "Middle of the starting town"
    },
    1: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293654/2_pxsxnf.webp",
        altText: "Middle of the starting town"
    },
    2: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293638/3_yv9sjb.webp",
        altText: "Mineshaft"
    },
    3: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293640/4_rvrhpj.webp",
        altText: "Inside mineshaft"
    },
    4: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293623/5_nnuqdg.webp",
        altText: "Inside mineshaft"
    },
    5: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293675/6_vhfr4w.webp",
        altText: "Inside mineshaft"
    },
    6: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293667/7_ahfrta.webp",
        altText: "Inside mineshaft"
    },
    7: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293625/8_pqwy6h.webp",
        altText: "Barn"
    },
    8: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293626/9_yp43ow.webp",
        altText: "Middle of the starting town"
    },
    9: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293664/10_ocgn73.webp",
        altText: "Graveyard"
    },
    10: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293658/11_rrwvfl.webp",
        altText: "Mansion hallway"
    },
    11: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293649/12_oay7fi.webp",
        altText: "Room in the mansion"
    },
    12: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293636/13_lqviir.webp",
        altText: "Mansion hallway"
    },
    13: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293635/14_mamuxi.webp",
        altText: "Room in the mansion"
    },
    14: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293614/15_diqrot.webp",
        altText: "Near enchanting house"
    },
    15: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293675/16_jxcmrm.webp",
        altText: "Glance from enchanting house"
    },
    16: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293672/17_s2iutq.webp",
        altText: "Glance from enchanting house"
    },
    17: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293630/18_cgohkm.webp",
        altText: "Nether portal and swing"
    },
    18: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293616/19_sborjf.webp",
        altText: "Enchantment table"
    },
    19: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293673/20_jb6bk3.webp",
        altText: "Near plaza"
    },
    20: { 
        imgUrl: "/mc/21.webp",
        altText: "At plaza"
    },
    21: { 
        imgUrl: "/mc/22.webp",
        altText: "Plaza pond"
    },
    22: { 
        imgUrl: "/mc/23.webp",
        altText: "Glance from plaza"
    },
    23: { 
        imgUrl: "/mc/24.webp",
        altText: "Near more houses"
    },
    24: { 
        imgUrl: "/mc/25.webp",
        altText: "Storage room"
    },
    25: { 
        imgUrl: "/mc/26.webp",
        altText: "Onw to mushroom village"
    },
    26: { 
        imgUrl: "/mc/27.webp",
        altText: "Mushroom village entrance"
    },
    27: { 
        imgUrl: "/mc/28.webp",
        altText: "Inside mushroom village"
    },
    28: { 
        imgUrl: "/mc/29.webp",
        altText: "Inside mushroom village"
    },
    29: { 
        imgUrl: "/mc/30.webp",
        altText: "Inside mushroom village"
    },
    30: { 
        imgUrl: "/mc/31.webp",
        altText: "Inside mushroom village"
    },
    31: { 
        imgUrl: "/mc/32.webp",
        altText: "View from houses"
    },
    32: { 
        imgUrl: "/mc/33.webp",
        altText: "Mineshaft and friend's house"
    },
    33: { 
        imgUrl: "/mc/34.webp",
        altText: "Onw to pagoda"
    },
    34: { 
        imgUrl: "/mc/35.webp",
        altText: "Pagoda entrance"
    },
    35: { 
        imgUrl: "/mc/36.webp",
        altText: "Pagoda ladder"
    },
    36: { 
        imgUrl: "/mc/37.webp",
        altText: "Middle of starting town"
    },
    37: { 
        imgUrl: "/mc/38.webp",
        altText: "Top view of starting town"
    },
    38: { 
        imgUrl: "/mc/39.webp",
        altText: "Top view of starting town"
    },
    39: { 
        imgUrl: "/mc/40.webp",
        altText: "Into the night"
    },
};

const imagesArray: JSX.Element[] = Object.values(images).map((image) => 
    <img loading="lazy" className="mc" src={image.imgUrl} alt={image.altText} />
);

const Minecraft = () => {
    return <>
        <h1 id="mc-title">
            Pieappleii's World &lt;3
        </h1>
        <section id="mc-container">
            {imagesArray}
        </section>
    </>
    
}

export default Minecraft;
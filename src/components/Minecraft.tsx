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
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293671/21_rjkwou.webp",
        altText: "At plaza"
    },
    21: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293625/22_ffuau4.webp",
        altText: "Plaza pond"
    },
    22: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293615/23_h7aalh.webp",
        altText: "Glance from plaza"
    },
    23: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293651/24_bi4nni.webp",
        altText: "Near more houses"
    },
    24: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293641/25_kmuwoj.webp",
        altText: "Storage room"
    },
    25: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293667/26_qrd5yu.webp",
        altText: "Onw to mushroom village"
    },
    26: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293658/27_t7c0le.webp",
        altText: "Mushroom village entrance"
    },
    27: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293645/28_xbscsz.webp",
        altText: "Inside mushroom village"
    },
    28: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293649/29_d5cg91.webp",
        altText: "Inside mushroom village"
    },
    29: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293665/30_lklqav.webp",
        altText: "Inside mushroom village"
    },
    30: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293659/31_cyhbcn.webp",
        altText: "Inside mushroom village"
    },
    31: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293653/32_utugy5.webp",
        altText: "View from houses"
    },
    32: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293639/33_wuvzoc.webp",
        altText: "Mineshaft and friend's house"
    },
    33: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293630/34_wmyffb.webp",
        altText: "Onw to pagoda"
    },
    34: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293618/35_afcrfx.webp",
        altText: "Pagoda entrance"
    },
    35: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293671/36_x4zxzc.webp",
        altText: "Pagoda ladder"
    },
    36: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293676/37_ak3i30.webp",
        altText: "Middle of starting town"
    },
    37: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293637/38_hvh8th.webp",
        altText: "Top view of starting town"
    },
    38: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293623/39_tpnpvb.webp",
        altText: "Top view of starting town"
    },
    39: { 
        imgUrl: "https://res.cloudinary.com/di3wnypeb/image/upload/v1751293670/40_xt2vxk.webp",
        altText: "Into the night"
    },
};

const imagesArray = Object.values(images).map((image) => 
    <img className="mc" src={image.imgUrl} alt={image.altText} />
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
"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import ContactForm from '@/components/form/ContactForm';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "首頁", id: "hero" },
              { name: "產品特色", id: "fy-features" },
              { name: "關於我們", id: "about" },
              { name: "聯絡我們", id: "contact" },
            ]}
            brandName="鋒源機械"
            button={{ text: "聯絡我們", href: "#contact" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroLogoBillboard
            logoText="鋒源機械有限公司"
            description="專業優先、品質優先與服務優先 鋒源以德國尖端機器人技術與務實精神，引領自動化包裝工業。"
            buttons={[
              { text: "聯絡我們", href: "#contact" }
            ]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DZm6GBhevTmhaJGNXipDviX179/uploaded-1778668282599-8805p6c6.png"
            mediaAnimation="slide-up"
            background={{ variant: "plain" }}
          />
        </div>

        <div id="fy-features" data-section="fy-features">
          <FeatureCardTwelve
            animationType="slide-up"
            title="FY-360 高速多重包裝機"
            description="整合尖端工業技術，定義包裝生產的新標準。"
            textboxLayout="split"
            useInvertedBackground={false}
            features={[
              { id: "f1", label: "速度極致", title: "超高速產能", items: ["罐裝：每分鐘 80 包", "PET 瓶：每分鐘 65 包"] },
              { id: "f2", label: "底圈技術", title: "進階包裝設計", items: ["採用無封條底圈技術", "確保成品穩固精美"] },
              { id: "f3", label: "精準掌控", title: "精密伺服控制", items: ["高精度伺服電機", "直覺式人機介面"] },
              { id: "f4", label: "智慧熱能", title: "智慧縮水技術", items: ["均勻熱輻射系統", "可調氣流設計"] },
              { id: "f5", label: "工業安全", title: "GMP與安全標準", items: ["精密安全感應器", "全程自動追蹤檢測"] }
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <MediaAbout
            useInvertedBackground={false}
            title="堅持：專業第一、品質第一、服務第一"
            description="我們秉持務實管理，透過與德國 KUKA 機器人整合，實現高精度自動化生產。鋒源機械不僅提供設備，更提供造福產業的自動化解決方案。"
            imageSrc="http://img.b2bpic.net/free-photo/detail-shot-machinery-factory_1359-268.jpg?_wi=1"
          />
        </div>

        <div id="product" data-section="product">
          <ProductCardFour
            animationType="slide-up"
            textboxLayout="split"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={false}
            products={[
              { id: "p1", name: "FY-360", price: "規格書 PDF", variant: "高速多重包裝機", imageSrc: "http://img.b2bpic.net/free-photo/man-warehouse-working-with-packages_23-2148886849.jpg" },
              { id: "p2", name: "FY-360LLMT", price: "規格書 PDF", variant: "高階高速包裝", imageSrc: "http://img.b2bpic.net/free-photo/modern-technology-assembly-cars-plant-automotive-industry-shop-production-assembly-machines-top-view-process-welding-parts-car_645730-588.jpg" },
              { id: "p3", name: "FASP-9020-2S", price: "規格書 PDF", variant: "可麗餅膠帶包裝", imageSrc: "http://img.b2bpic.net/free-photo/pharmacy-industry-woman-worker-protective-clothing-operating-production-tablets-sterile-working-conditions_645730-381.jpg" },
              { id: "p4", name: "FASP-6020-2", price: "規格書 PDF", variant: "PVC/OPP計數對齊", imageSrc: "http://img.b2bpic.net/free-photo/pharmaceutical-technician-sterile-environment-working-with-equipment-pharmacy-industry_645730-333.jpg" },
              { id: "p5", name: "FASP-9020-2A", price: "規格書 PDF", variant: "先進計數系統", imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-attractive-lady-blue-construction-suit-helmet-controlling-machines-hangar-working-daytime-buildings-architecture-construction_140725-16223.jpg" },
              { id: "p6", name: "綜合自動化設備", price: "規格書 PDF", variant: "客製化解決方案", imageSrc: "http://img.b2bpic.net/free-photo/bended-caucasian-scientist-blue-lab-suit-trying-fix-manufacture-machine-with-shafts_645730-255.jpg" },
            ]}
            title="產品卓越系列"
            description="滿足現代高速包裝需求的專業設備方案。"
          />
        </div>

        <div id="social" data-section="social">
          <SocialProofOne
            textboxLayout="default"
            useInvertedBackground={true}
            names={["工業先鋒", "精工製造", "自動化科技", "精密儀器", "智能包裝", "國際物流", "綠色生產"]}
            title="合作夥伴與認可"
            description="我們深受全球自動化包裝市場信賴。"
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardFive
            textboxLayout="default"
            useInvertedBackground={false}
            testimonials={[
              { id: "t1", name: "陳經理", date: "2024", title: "生產部主管", quote: "鋒源的包裝設備效能卓越，且售後服務極為即時。", tag: "信任", avatarSrc: "http://img.b2bpic.net/free-photo/man-with-helmet-working-logistic_23-2148886820.jpg", imageSrc: "http://img.b2bpic.net/free-photo/robotic-equipment-collects-cars-production-line-long-format-shooting-automotive-car-factory-banner_645730-514.jpg?_wi=2" },
              { id: "t2", name: "林技術長", date: "2024", title: "自動化技術部", quote: "整合性極佳，與我們的現有產線無縫銜接。", tag: "專業", avatarSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-young-man-with-helmet_23-2148269289.jpg", imageSrc: "http://img.b2bpic.net/free-photo/detail-shot-machinery-factory_1359-268.jpg?_wi=2" },
              { id: "t3", name: "張廠長", date: "2024", title: "製造部廠長", quote: "產量提升顯著，是我們轉型工業4.0的最佳夥伴。", tag: "品質", avatarSrc: "http://img.b2bpic.net/free-photo/businesswoman-working-warehouse_329181-12778.jpg", imageSrc: "http://img.b2bpic.net/free-photo/metal-worker-using-machinery-industrial-workshop-generated-by-ai_188544-19969.jpg?_wi=2" },
              { id: "t4", name: "王經理", date: "2024", title: "供應鏈部", quote: "設備耐用度高，大幅減少保養停機時間。", tag: "務實", avatarSrc: "http://img.b2bpic.net/free-photo/man-solar-panels-plant-using-laptop-improve-solar-cells-efficiency_482257-119894.jpg", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-corporate-woman-looks-dreamy-smiles-stands-outside-street-leans-her-head-hands_1258-193990.jpg" },
              { id: "t5", name: "李總監", date: "2024", title: "營運總監", quote: "鋒源機械是我們擴展自動化產線的首選廠商。", tag: "高效", avatarSrc: "http://img.b2bpic.net/free-vector/gear-silhouette-logo_361591-2427.jpg", imageSrc: "http://img.b2bpic.net/free-vector/gradient-electronics-logo-set_23-2148992608.jpg" }
            ]}
            title="客戶好評"
            description="來自產業領袖的信任與見證。"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactForm
            title="立即諮詢"
            description="留下您的電子郵件，我們的專業團隊將盡快與您聯繫，協助規劃您的自動化產線需求。"
            tag="合作聯繫"
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            imageSrc="http://img.b2bpic.net/free-photo/empty-parking-lot-wall-urban-industrial-background_1127-2307.jpg"
            logoText="鋒源機械有限公司"
            columns={[
              { title: "關於我們", items: [{ label: "核心理念", href: "#about" }, { label: "品牌故事", href: "#" }] },
              { title: "產品系列", items: [{ label: "FY 系列", href: "#product" }, { label: "FASP 系列", href: "#product" }] }
            ]}
            copyrightText="© 2025 鋒源機械有限公司 | 務實管理與高品質"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

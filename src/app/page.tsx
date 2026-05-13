"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmallSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "首頁",
          id: "hero",
        },
        {
          name: "核心理念",
          id: "about",
        },
        {
          name: "產品系列",
          id: "product",
        },
        {
          name: "聯絡我們",
          id: "contact",
        },
      ]}
      brandName="鋒源機械"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "gradient-bars",
      }}
      logoText="鋒源機械有限公司"
      description="致力於三大第一：專業優先、品質優先與服務優先。鋒源以德國尖端機器人技術與務實精神，引領自動化包裝工業。"
      buttons={[
        {
          text: "探索產品系列",
          href: "#product",
        },
        {
          text: "聯絡我們",
          href: "mailto:fungyuan@fungyuan.com",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/robotic-equipment-collects-cars-production-line-long-format-shooting-automotive-car-factory-banner_645730-514.jpg?_wi=1"
      mediaAnimation="slide-up"
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

  <div id="features" data-section="features">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "德國精密整合",
          description: "與 KUKA 機器人無縫整合，提升精準度。",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/metal-worker-using-machinery-industrial-workshop-generated-by-ai_188544-19969.jpg?_wi=1",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/box-conveyor-belt_23-2152001541.jpg",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/robotic-equipment-collects-cars-production-line-long-format-shooting-automotive-car-factory-banner_645730-514.jpg?_wi=2",
          imageAlt: "wrapping machine packaging",
        },
        {
          title: "高效能生產",
          description: "大幅降低人事與運作成本，提振產能。",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/mechanic-controls-robotic-arm-futuristic-production-line-generated-by-ai_188544-20028.jpg",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/industry-40-photovoltaics-plant-admin-using-digital-device-app_482257-126123.jpg",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/detail-shot-machinery-factory_1359-268.jpg?_wi=2",
          imageAlt: "wrapping machine packaging",
        },
        {
          title: "全方位自動化",
          description: "從計數到對齊，實現全自動作業流程。",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/cement-factory-indoors-industrial-cement-production-conveyor-conveyer-line-ceramic-tile-heavy-plant-factory-production-ceramic-tiles_645730-162.jpg",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/tracking-software-displayed-monitor-industry-40-industrial-plant_482257-120661.jpg",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-helmet-working-logistic_23-2148886820.jpg",
          imageAlt: "wrapping machine packaging",
        },
      ]}
      showStepNumbers={true}
      title="科技與效率並重"
      description="我們將尖端自動化技術轉化為您企業的競爭優勢。"
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "FY-360",
          price: "規格書 PDF",
          variant: "高速多重包裝機",
          imageSrc: "http://img.b2bpic.net/free-photo/man-warehouse-working-with-packages_23-2148886849.jpg",
        },
        {
          id: "p2",
          name: "FY-360LLMT",
          price: "規格書 PDF",
          variant: "高階高速包裝",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-technology-assembly-cars-plant-automotive-industry-shop-production-assembly-machines-top-view-process-welding-parts-car_645730-588.jpg",
        },
        {
          id: "p3",
          name: "FASP-9020-2S",
          price: "規格書 PDF",
          variant: "可麗餅膠帶包裝",
          imageSrc: "http://img.b2bpic.net/free-photo/pharmacy-industry-woman-worker-protective-clothing-operating-production-tablets-sterile-working-conditions_645730-381.jpg",
        },
        {
          id: "p4",
          name: "FASP-6020-2",
          price: "規格書 PDF",
          variant: "PVC/OPP計數對齊",
          imageSrc: "http://img.b2bpic.net/free-photo/pharmaceutical-technician-sterile-environment-working-with-equipment-pharmacy-industry_645730-333.jpg",
        },
        {
          id: "p5",
          name: "FASP-9020-2A",
          price: "規格書 PDF",
          variant: "先進計數系統",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-attractive-lady-blue-construction-suit-helmet-controlling-machines-hangar-working-daytime-buildings-architecture-construction_140725-16223.jpg",
        },
        {
          id: "p6",
          name: "綜合自動化設備",
          price: "規格書 PDF",
          variant: "客製化解決方案",
          imageSrc: "http://img.b2bpic.net/free-photo/bended-caucasian-scientist-blue-lab-suit-trying-fix-manufacture-machine-with-shafts_645730-255.jpg",
        },
      ]}
      title="產品卓越系列"
      description="滿足現代高速包裝需求的專業設備方案。"
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "工業先鋒",
        "精工製造",
        "自動化科技",
        "精密儀器",
        "智能包裝",
        "國際物流",
        "綠色生產",
      ]}
      title="合作夥伴與認可"
      description="我們深受全球自動化包裝市場信賴。"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "陳經理",
          date: "2024",
          title: "生產部主管",
          quote: "鋒源的包裝設備效能卓越，且售後服務極為即時。",
          tag: "信任",
          avatarSrc: "http://img.b2bpic.net/free-photo/man-with-helmet-working-logistic_23-2148886820.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/robotic-equipment-collects-cars-production-line-long-format-shooting-automotive-car-factory-banner_645730-514.jpg?_wi=3",
          imageAlt: "professional executive portrait",
        },
        {
          id: "t2",
          name: "林技術長",
          date: "2024",
          title: "自動化技術部",
          quote: "整合性極佳，與我們的現有產線無縫銜接。",
          tag: "專業",
          avatarSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-young-man-with-helmet_23-2148269289.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/detail-shot-machinery-factory_1359-268.jpg?_wi=3",
          imageAlt: "professional executive portrait",
        },
        {
          id: "t3",
          name: "張廠長",
          date: "2024",
          title: "製造部廠長",
          quote: "產量提升顯著，是我們轉型工業4.0的最佳夥伴。",
          tag: "品質",
          avatarSrc: "http://img.b2bpic.net/free-photo/businesswoman-working-warehouse_329181-12778.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/metal-worker-using-machinery-industrial-workshop-generated-by-ai_188544-19969.jpg?_wi=2",
          imageAlt: "professional executive portrait",
        },
        {
          id: "t4",
          name: "王經理",
          date: "2024",
          title: "供應鏈部",
          quote: "設備耐用度高，大幅減少保養停機時間。",
          tag: "務實",
          avatarSrc: "http://img.b2bpic.net/free-photo/man-solar-panels-plant-using-laptop-improve-solar-cells-efficiency_482257-119894.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-corporate-woman-looks-dreamy-smiles-stands-outside-street-leans-her-head-hands_1258-193990.jpg",
          imageAlt: "professional executive portrait",
        },
        {
          id: "t5",
          name: "李總監",
          date: "2024",
          title: "營運總監",
          quote: "鋒源機械是我們擴展自動化產線的首選廠商。",
          tag: "高效",
          avatarSrc: "http://img.b2bpic.net/free-vector/gear-silhouette-logo_361591-2427.jpg",
          imageSrc: "http://img.b2bpic.net/free-vector/gradient-electronics-logo-set_23-2148992608.jpg",
          imageAlt: "professional executive portrait",
        },
      ]}
      title="客戶好評"
      description="來自產業領袖的信任與見證。"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "設備保固多久？",
          content: "全機提供完整保固，並附贈定時檢查服務。",
        },
        {
          id: "f2",
          title: "如何聯絡維修？",
          content: "請透過信箱或電話聯繫，我們將於24小時內回應。",
        },
        {
          id: "f3",
          title: "提供海外銷售嗎？",
          content: "是的，我們提供完善的全球出口服務與技術安裝。",
        },
      ]}
      title="常見詢問"
      description="為您解答機械設備與維運問題。"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="聯絡我們"
      title="即刻諮詢自動化解決方案"
      description="地址：鳳源區東北街187號 | 電話：04-25232986 | 電子郵件：fungyuan@fungyuan.com"
      imageSrc="http://img.b2bpic.net/free-photo/empty-underground-parking-garage_1127-3162.jpg"
      mediaAnimation="slide-up"
      buttonText="發送諮詢信件"
      onSubmit={(email) => window.location.href = 'mailto:fungyuan@fungyuan.com?subject=Inquiry from Website'}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/empty-parking-lot-wall-urban-industrial-background_1127-2307.jpg"
      logoText="鋒源機械有限公司"
      columns={[
        {
          title: "關於我們",
          items: [
            {
              label: "核心理念",
              href: "#about",
            },
            {
              label: "品牌故事",
              href: "#",
            },
          ],
        },
        {
          title: "產品系列",
          items: [
            {
              label: "FY 系列",
              href: "#product",
            },
            {
              label: "FASP 系列",
              href: "#product",
            },
          ],
        },
        {
          title: "聯絡方式",
          items: [
            {
              label: "04-25232986",
              href: "tel:0425232986",
            },
            {
              label: "fungyuan@fungyuan.com",
              href: "mailto:fungyuan@fungyuan.com",
            },
          ],
        },
      ]}
      copyrightText="© 2025 鋒源機械有限公司 | 務實管理與高品質"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

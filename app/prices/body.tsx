"use client";
import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Container from "@/components/common/parent-container";
import CurrenctSelector from "@/components/common/currency_dropdown";
import Link from "next/link";
import CheckIcon from "../../components/icons/check-icon";
import { useGetProductsQuery } from "../../store/api/productApi";
import { useT } from "@/utils/t";

const parseListItems = (html: string): string[] => {
  const matches = html.match(/<li>([\s\S]*?)<\/li>/g) ?? [];
  return matches.map((m) => m.replace(/<\/?li>/g, "").trim());
};

const getPlanNameKey = (trialDuration?: number) =>
  trialDuration === 7
    ? "public__product__monthly_2_price_increased_7__name"
    : "public__product__monthly_2_price_increased__name";

const getPlanPriceTitleKey = (trialDuration?: number) =>
  trialDuration === 7
    ? "public__product__monthly_2_price_increased_7__price_title"
    : "public__product__monthly_2_price_increased__price_title";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  title: string;
  price: string;
  period?: string;
  features: PricingFeature[];
}

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
  return (
    <div className="flex flex-col bg-white p-[24px] desktop:p-[32px] shadow-card rounded-[12px] hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-row item-center justify-between lg:flex-col w-full max-w-full">
        <h3
          className="
            text-[var(--Black)]
            text-center
            font-medium
            text-[20px]
            leading-[28px]
            lg:text-[24px]
            lg:leading-[32px]"
        >
          {plan.title}
        </h3>
        <div className="lg:pt-[16px] flex justify-center items-center">
          <span
            className="
            text-[var(--Black)]
            font-regular
            text-[24px]
            leading-[32px]"
          >
            {plan.price}
          </span>
          {plan.period && (
            <p className="text-[var(--Grey)] text-4 font-regular pl-1">
              {plan.period}
            </p>
          )}
        </div>
      </div>
      <div className="w-full h-[1px] bg-[rgba(205,208,219,0.5)] my-[24px]" />
      <ul className="space-y-[12px]">
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center justify-start gap-[16px]"
          >
            <CheckIcon />
            <span className="text-[#3F3E3E] text-[16px] leading-[24px] text-[var(--Dark-gray)]">
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PricingPage: React.FC = () => {
  const t = useT();
  const { data: products } = useGetProductsQuery('checkout');

  const p0 = products?.[0]?.productVariables;
  const p1 = products?.[1]?.productVariables;
  const p2 = products?.[2]?.productVariables;

  const plans: PricingPlan[] = [
    {
      title: t(getPlanNameKey(p0?.trialDuration)),
      price: t(getPlanPriceTitleKey(p0?.trialDuration), { titlePrice: `${p0?.currencySymbol}${p0?.titlePrice}` }),
      features: parseListItems(
        t("api__products__monthly_2_price_increased__description__public", {
          trialDuration: String(p0?.trialDuration ?? ""),
          regularPrice: `${p0?.currencySymbol}${p0?.regularPrice}`,
          regularDuration: String(p0?.regularDuration ?? ""),
        })
      ).map((text) => ({ text, included: true })),
    },
    {
      title: `${p1?.trialDuration}-${p1?.trialContext} Full Access`,
      price: `${p1?.currencySymbol}${p1?.titlePrice}`,
      features: parseListItems(
        t("api__product__monthly_3_price_increased__description__public", {
          trialDuration: String(p1?.trialDuration ?? ""),
          regularPrice: `${p1?.currencySymbol}${p1?.regularPrice}`,
          regularDuration: String(p1?.regularDuration ?? ""),
        })
      ).map((text) => ({ text, included: true })),
    },
    {
      title: "Yearly Plan",
      price: `${p2?.currencySymbol}${p2?.titlePrice}`,
      period: "/ mo",
      features: parseListItems(
        t("api__products__annual_price_increased__description", {
          regularPrice: `${p2?.currencySymbol}${p2?.regularPrice}`,
        })
      ).map((text) => ({ text, included: true })),
    },
  ];

  return (
    <div className="bg-[var(--Generator-Background)]">
      <div
        className="min-h-screen"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <div className="max-w-full">
          {/* Breadcrumb */}
          <div className="h-[54px] w-full bg-white desktop:bg-transparent">
            <nav className="w-full desktop:max-w-[1256px] mx-auto relative px-5 flex items-center gap-[8px] leading-[22px] py-[16px]">
              <span className="text-[14px] font-regular">QR Center</span>
              <ChevronRight className={`w-5 h-5 text-[#79809A]`} />
              <span className="text-[14px] font-regular text-[var(--Blue)]">
                {t("public__qr__breadcrumbs__prices")}
              </span>
            </nav>
          </div>
          <Container>
            <div>
              {/* Header */}
              <div className="flex justify-between items-center pt-[16px] desktop:pt-[80px]">
                <h1 className="text-[24px] leading-[32px] desktop:text-[32px] desktop:leading-[40px] font-bold text-[var(--black)]">
                  {t("public__qr__page__upgrade__title")}
                </h1>
                <div className="flex items-center gap-6">
                  <div className="hidden desktop:flex">
                    <CurrenctSelector textClass="text-[var(--Grey)]" />
                  </div>
                  <Link
                    href="/generator"
                    className="hidden desktop:flex bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] rounded-[10px] text-white text-[18px] leading-[26px] font-medium py-[11px] px-8 transition-all duration-300 ease-linear
            "
                  >
                    {t("public__dashboard__shared__cta_button")}
                  </Link>
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="pt-[71px] desktop:pt-[56px] pb-[120px] grid lg:grid-cols-3 gap-[24px] desktop:gap-[32px]">
                {plans.map((plan, index) => (
                  <PricingCard key={index} plan={plan} />
                ))}
              </div>
            </div>
            <div className="md:hidden fixed bottom-0 left-0 w-full px-[20px] pt-[16px] pb-[32px] bg-white shadow-card z-[9999]">
              <Link
                href="/generator"
                className="w-full py-3 bg-[var(--Blue)] text-white font-semibold rounded-lg flex items-center justify-center gap-3"
              >
                {t("public__dashboard__shared__cta_button")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

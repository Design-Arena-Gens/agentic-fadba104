import Image from "next/image";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ItineraryTabs } from "@/components/ItineraryTabs";
import {
  experiences,
  faqs,
  itineraries,
  releases,
  stadiumShowcase,
} from "@/data/content";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 py-16 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 overflow-hidden">
        <div className="mx-auto h-64 max-w-5xl rounded-full bg-gradient-to-r from-rose-200/70 via-amber-200/70 to-cyan-200/70 blur-3xl" />
      </div>

      <section className="relative overflow-hidden rounded-[40px] border border-white/30 bg-white/80 p-8 shadow-[0_40px_120px_-60px_rgba(244,63,94,0.45)] backdrop-blur-xl dark:bg-white/5 sm:p-14">
        <div className="absolute inset-y-0 start-0 hidden w-1/3 bg-gradient-to-b from-rose-500/15 via-transparent to-amber-500/20 sm:block" />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6 text-slate-800 dark:text-slate-100">
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-4 py-2 text-sm font-semibold text-rose-600 shadow-sm shadow-rose-400/30 dark:bg-rose-400/15 dark:text-rose-100">
              انطلاقة كأس العرب 2025 · قطر
            </div>
            <h1 className="text-4xl font-black leading-[1.15] sm:text-5xl">
              كل ما تحتاجه لرحلة مشجّع أسطورية في{" "}
              <span className="bg-gradient-to-l from-rose-500 via-amber-500 to-emerald-500 bg-clip-text text-transparent">
                قطر 2025
              </span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-700 dark:text-slate-200">
              منتج رقمي متكامل يجمع خطة السفر، حجوزات الملاعب، التجارب
              الثقافية، والتنبيهات المباشرة لتعيش كأس العرب كخبير محلي. دليل
              عملي، محدّث، ومخصص لعشاق كرة القدم.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#purchase"
                className="inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/40 transition hover:-translate-y-0.5 hover:bg-rose-500"
              >
                احجز نسختك الرقمية الآن
              </a>
              <a
                href="#preview"
                className="inline-flex items-center justify-center rounded-full border border-slate-200/60 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-300 hover:text-rose-600 dark:border-white/20 dark:bg-white/10 dark:text-white"
              >
                تصفّح النظرة العامة
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              {[
                ["+120 صفحة", "خرائط وبيانات رسمية"],
                ["24/7", "دعم كونسييرج ميداني"],
                ["3 لغات", "عربي · إنجليزي · فرنسي"],
                ["حجوزات", "شركاء موثوقون"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-2xl border border-white/20 bg-white/70 p-4 text-center shadow-sm dark:bg-white/5"
                >
                  <p className="text-lg font-semibold text-rose-500">{value}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-300">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-rose-500/20 via-transparent to-amber-500/40 blur-2xl" />
            <div className="relative w-full max-w-md rounded-[32px] border border-white/30 bg-white/80 p-6 shadow-2xl shadow-rose-200/60 dark:bg-white/10">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-500">
                  محتويات المنتج الرقمي
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-200">
                  تحديثات مجانية
                </span>
              </div>
              <ul className="mt-5 space-y-4 text-sm text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-6 w-6 rounded-full bg-rose-500 text-center text-xs font-bold leading-6 text-white shadow-rose-400/40">
                    1
                  </span>
                  <p>
                    ملف استراتيجي لتحضير الرحلة، يشمل قوائم تأشيرات، ميزانيات
                    تفصيلية، وأدوات تخطيط يومي.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-6 w-6 rounded-full bg-amber-500 text-center text-xs font-bold leading-6 text-white shadow-amber-400/40">
                    2
                  </span>
                  <p>
                    منصة تفاعلية على الويب لتنسيق التذاكر، الإقامات، والجولات
                    مع شركائنا المعتمدين.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-6 w-6 rounded-full bg-cyan-600 text-center text-xs font-bold leading-6 text-white shadow-cyan-500/40">
                    3
                  </span>
                  <p>
                    قناة تنبيهات مباشرة عبر البريد والهواتف الذكية لمستجدات
                    البطولة، التنقل، والعروض الحصرية.
                  </p>
                </li>
              </ul>
              <div className="mt-6 flex flex-col gap-2 rounded-2xl bg-emerald-500/15 p-5 text-sm text-emerald-700 dark:text-emerald-200">
                <strong className="text-base font-semibold">
                  عرض الإطلاق: 89 دولار فقط
                </strong>
                <span>
                  يشمل رخصة استخدام لعائلة مكوّنة من 4 أشخاص وخريطة تفاعلية
                  قابلة للتنزيل دون اتصال.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="preview"
        className="space-y-12 rounded-[36px] border border-white/30 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:bg-white/5 sm:p-12"
      >
        <header className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">
            تخطيطات الرحلات
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            اختر المسار الأنسب لجدولك وحجوزاتك
          </h2>
          <p className="max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
            صممنا ثلاثة مسارات مرنة تغطي كل أنواع المسافرين. كل خطة تتضمن
            توصيات الفنادق، التنقل الذكي، ونصائح لتجربة أفضل الأطعمة المحلية.
          </p>
        </header>
        <ItineraryTabs itineraries={itineraries} />
      </section>

      <section className="grid gap-10 rounded-[36px] border border-white/30 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:bg-white/5 sm:grid-cols-[1fr_1.2fr] sm:p-12">
        <div className="space-y-5">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
            ملاعب البطولة
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            جولات حصرية داخل أبرز الأيقونات المعمارية في قطر
          </h2>
          <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
            نحجز لك زيارة منظمة لكل ملعب مع مرشد معتمد، تشمل مناطق اللاعبين،
            غرف الاستشفاء، وميزات التبريد المتقدمة. التوفر محدود ويتم تأكيده
            بعد الشراء مباشرة.
          </p>
          <div className="rounded-3xl bg-gradient-to-br from-rose-500/10 via-amber-500/20 to-emerald-500/10 p-6 text-sm text-slate-700 shadow-lg dark:text-slate-200">
            <strong className="text-base text-rose-600 dark:text-rose-200">
              ميزة إضافية:
            </strong>{" "}
            يتضمن الدليل رموز QR للدخول السريع، قوائم انتظار مخصصة، ومزايا
            متجر المشجع الحصري داخل الملاعب.
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {stadiumShowcase.map((stadium) => (
            <article
              key={stadium.name}
              className="rounded-[28px] border border-white/25 bg-white/80 p-5 shadow-lg shadow-rose-200/40 transition hover:-translate-y-1 dark:bg-white/10 dark:shadow-black/50"
            >
              <span className="text-3xl">{stadium.icon}</span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                {stadium.name}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
                {stadium.location} · سعة {stadium.capacity}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">
                {stadium.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-10 rounded-[36px] border border-white/30 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:bg-white/5 sm:p-12">
        <header className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
            تجارب مضافة
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            صمم تجربة تناسب شغفك بعيدًا عن المدرجات
          </h2>
          <p className="max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
            كل تجربة موثقة مع شركاء رسميين، وتشمل النقل، المرافقة الميدانية، وخطط
            الطوارئ. حدد فئة التجربة وشاهد أبرز العروض.
          </p>
        </header>
        <ExperienceGrid experiences={experiences} />
      </section>

      <section
        id="purchase"
        className="grid gap-8 rounded-[36px] border border-white/30 bg-gradient-to-br from-rose-500/15 via-white/80 to-emerald-500/20 p-8 shadow-2xl backdrop-blur-xl dark:from-rose-400/10 dark:via-white/5 dark:to-emerald-400/10 sm:grid-cols-[1.1fr_0.9fr] sm:p-12"
      >
        <div className="space-y-5 text-slate-900 dark:text-slate-100">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600">
            المنتج الرقمي الكامل
          </span>
          <h2 className="text-3xl font-bold">
            استثمر في دليل واحد يختصر عليك شهورًا من البحث والاتصالات
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            فور الشراء، يصلك رابط تنزيل آمن، حساب مستخدم، ودخول لبوابة التحديثات
            الذكية. الدليل قابل للطباعة، يعمل بدون إنترنت، ويدعم مشاركة الجدول
            مع فريقك أو عائلتك بضغطة واحدة.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.link/oqn6gy"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/50 transition hover:-translate-y-0.5 hover:bg-emerald-500"
            >
              تواصل مع خبير السفر الآن
            </a>
            <a
              href="mailto:sales@qatarguide2025.com"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/60 px-7 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-600 dark:border-white/20 dark:bg-white/10 dark:text-slate-200"
            >
              اطلب عرضًا مخصصًا للشركات
            </a>
          </div>
        </div>
        <div className="space-y-5 rounded-[28px] border border-emerald-400/30 bg-white/80 p-6 shadow-xl shadow-emerald-200/50 dark:bg-white/10">
          <div className="flex items-baseline justify-between">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              ما الذي ستحصل عليه؟
            </h3>
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-200">
              تحديثات حتى ديسمبر 2025
            </span>
          </div>
          <ul className="space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-200">
            {releases.map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border border-white/40 bg-white/80 p-4 shadow-sm dark:bg-white/5 dark:shadow-black/30"
              >
                <strong className="block text-slate-900 dark:text-white">
                  {item.label}
                </strong>
                <span className="text-slate-600 dark:text-slate-300">
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl bg-emerald-500/15 p-4 text-sm text-emerald-700 dark:text-emerald-200">
            <p>
              يشمل ضمان رضا لمدة 14 يومًا من تاريخ الإطلاق الرسمي. إذا لم تكن
              التجربة بالمستوى المتوقع، سنعيد لك المبلغ بالكامل.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-10 rounded-[36px] border border-white/30 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:bg-white/5 sm:grid-cols-[1fr_0.7fr] sm:p-12">
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            الأسئلة الشائعة
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            كل ما تحتاج معرفته قبل الانضمام
          </h2>
          <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
            فريقنا متواجد على مدار الساعة للإجابة عن استفساراتك، ويمكن حجز مكالمة
            استشارية قبل الشراء دون أي التزام.
          </p>
          <div className="rounded-2xl bg-slate-900/5 p-4 text-sm text-slate-700 shadow-sm dark:bg-white/10 dark:text-slate-200">
            بريد الدعم:{" "}
            <a
              href="mailto:support@qatarguide2025.com"
              className="font-semibold text-rose-600 underline-offset-4 hover:underline dark:text-rose-200"
            >
              support@qatarguide2025.com
            </a>
          </div>
        </div>
        <FaqAccordion faqs={faqs} />
      </section>

      <footer className="mb-12 flex flex-col items-center gap-4 text-center text-sm text-slate-600 dark:text-slate-400">
        <Image
          src="/logo-qatar.svg"
          alt="Qatar 2025 guide logo"
          width={120}
          height={48}
          className="opacity-80"
        />
        <p>
          جميع الحقوق محفوظة © قطر مسافر 2025 · شريك رسمي لخدمات السفر للفعاليات
          الرياضية.
        </p>
        <p>مصمم للعرض على منصات الويب وقابل للنشر فورًا على Vercel.</p>
      </footer>
    </main>
  );
}

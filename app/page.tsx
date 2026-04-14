import Image from "next/image";
import { AnimateOnScroll } from "./components/animate-on-scroll";
import { LeadForm } from "./components/lead-form";

export default function Home() {
  return (
    <>
      {/* ═══════════════ NAV ═══════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#">
            <Image
              src="/logo.svg"
              alt="GoFalah"
              width={140}
              height={38}
              priority
            />
          </a>
          <div className="hidden lg:flex items-center gap-8 text-sm text-gray-600">
            <a href="#problems" className="hover:text-emerald-700 transition-colors">Проблемы</a>
            <a href="#features" className="hover:text-emerald-700 transition-colors">Возможности</a>
            <a href="#compare" className="hover:text-emerald-700 transition-colors">Сравнение</a>
            <a href="#pricing" className="hover:text-emerald-700 transition-colors">Тарифы</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://gofalah.com/register"
              className="hidden sm:inline-block border border-emerald-700 text-emerald-700 px-5 py-2 rounded-lg text-sm font-medium hover:bg-emerald-50 transition-colors"
            >
              Регистрация
            </a>
            <a
              href="https://gofalah.com/login"
              className="bg-emerald-700 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-emerald-800 transition-colors"
            >
              Войти
            </a>
          </div>
        </div>
      </nav>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-white to-amber-50/30" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-emerald-200">
              Альтернатива amoCRM для бизнеса в СНГ
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.08] mb-6 max-w-4xl animate-fade-in-up-delay-1">
            Клиенты теряются?<br />
            <span className="gradient-text">Мы это исправим.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mb-10 animate-fade-in-up-delay-2">
            Менеджеры забывают перезвонить. Лиды из WhatsApp теряются. Вы не знаете,
            какая реклама приносит деньги. GoFalah решает все три проблемы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-3">
            <a
              href="https://gofalah.com/register"
              className="bg-emerald-700 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-emerald-800 transition-all hover:shadow-lg hover:shadow-emerald-200 text-center"
            >
              Попробовать бесплатно
            </a>
            <a
              href="#demo"
              className="border border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-base font-semibold hover:bg-gray-50 transition-colors text-center"
            >
              Оставить заявку на демо
            </a>
          </div>

          {/* Hero CRM mockup */}
          <div className="mt-14 md:mt-20 animate-fade-in-up-delay-3">
            <div className="bg-white rounded-2xl shadow-2xl shadow-gray-200/60 border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200 max-w-md">
                    app.gofalah.com/pipeline
                  </div>
                </div>
              </div>
              <div className="p-4 md:p-6 grid grid-cols-12 gap-4 min-h-[300px] md:min-h-[420px]">
                <div className="col-span-2 hidden md:block space-y-3">
                  <div className="h-8 bg-emerald-700/10 rounded-lg" />
                  <div className="h-6 bg-gray-100 rounded" />
                  <div className="h-6 bg-emerald-50 rounded border-l-2 border-emerald-700" />
                  <div className="h-6 bg-gray-100 rounded" />
                  <div className="h-6 bg-gray-100 rounded" />
                  <div className="h-6 bg-gray-100 rounded" />
                </div>
                <div className="col-span-12 md:col-span-10">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <KanbanColumn title="Новые заявки" color="bg-blue-400" count={3}>
                      <KanbanCard name="ТОО Астана Строй" amount="2 500 000 ₸" tag="Горячий" tagColor="bg-red-100 text-red-700" />
                      <KanbanCard name="ИП Нурланов" amount="450 000 ₸" tag="WhatsApp" tagColor="bg-green-100 text-green-700" />
                      <KanbanCard name="Azimut Group" amount="1 200 000 ₸" tag="Instagram" tagColor="bg-pink-100 text-pink-700" />
                    </KanbanColumn>
                    <KanbanColumn title="Переговоры" color="bg-amber-400" count={2}>
                      <KanbanCard name="Mega Almaty" amount="5 800 000 ₸" tag="VIP" tagColor="bg-purple-100 text-purple-700" />
                      <KanbanCard name="Kaspi Solutions" amount="980 000 ₸" tag="Повторный" tagColor="bg-amber-100 text-amber-700" />
                    </KanbanColumn>
                    <KanbanColumn title="КП отправлено" color="bg-emerald-400" count={2} hideOnMobile>
                      <KanbanCard name="BTS Logistics" amount="3 400 000 ₸" tag="Горячий" tagColor="bg-red-100 text-red-700" />
                      <KanbanCard name="Prime Education" amount="750 000 ₸" tag="Telegram" tagColor="bg-blue-100 text-blue-700" />
                    </KanbanColumn>
                    <KanbanColumn title="Оплачено" color="bg-green-500" count={4} hideOnMobile>
                      <KanbanCard name="QazTech" amount="1 900 000 ₸" tag="Закрыто" tagColor="bg-green-100 text-green-700" />
                      <KanbanCard name="NomadSoft" amount="620 000 ₸" tag="Закрыто" tagColor="bg-green-100 text-green-700" />
                    </KanbanColumn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PAIN POINTS ═══════════════ */}
      <section id="problems" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">Знакомо?</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
                Эти проблемы убивают ваши продажи
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimateOnScroll delay={0}>
              <PainCard
                emoji="📱"
                title="Лиды из мессенджеров теряются"
                description="Клиент написал в WhatsApp, менеджер забыл ответить. Через час клиент ушёл к конкуренту. Нет единого окна для всех каналов."
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <PainCard
                emoji="📊"
                title="Не понимаете, какая реклама работает"
                description="Тратите на рекламу 500K+ в месяц, но не знаете, откуда приходят клиенты. ROI — загадка. Бюджет сливается в пустоту."
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <PainCard
                emoji="🤷"
                title="Менеджеры работают в хаосе"
                description="Задачи в голове, клиенты в блокноте, переписки в телефоне. Когда менеджер увольняется — уносит базу с собой."
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <PainCard
                emoji="💸"
                title="amoCRM стоит дорого для СНГ"
                description="От 499₽/мес за пользователя + интеграции + виджеты. Для команды из 10 человек — от 250 000 ₸/мес. И это без аналитики."
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={400}>
              <PainCard
                emoji="🔒"
                title="Bitrix24 — сложно и перегружено"
                description="Сотни кнопок, которые никто не использует. Команда саботирует внедрение. Обучение занимает недели."
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={500}>
              <PainCard
                emoji="📉"
                title="Нет контроля над воронкой"
                description="Сколько сделок на каждом этапе? Какой средний цикл сделки? Где узкое место? Ответов нет — только догадки."
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════════ SOLUTION INTRO ═══════════════ */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-6">
              <span className="text-emerald-700 text-sm font-semibold uppercase tracking-wider">Решение</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
                GoFalah — CRM, которой <span className="gradient-text">реально пользуются</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                Простая как мессенджер, мощная как enterprise-система. Создана специально для малого и среднего бизнеса в Казахстане, России и Узбекистане.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════ FEATURES: OWNER ═══════════════ */}
      <section id="features" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-lg">
                👔
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">Для владельца бизнеса</h3>
                <p className="text-gray-500 text-sm">Полный контроль без микроменеджмента</p>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimateOnScroll delay={0}>
              <FeatureCard
                icon={<DashboardIcon />}
                title="Dashboard с KPI"
                description="Видите выручку, конверсию, средний чек и количество сделок на одном экране. Данные обновляются в реальном времени."
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <FeatureCard
                icon={<AnalyticsIcon />}
                title="ROI по каждому каналу"
                description="Знайте точно: Instagram принёс 2.4M, а Google Ads — только 180K. Перестаньте гадать, где работает реклама."
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <FeatureCard
                icon={<RbacIcon />}
                title="Контроль доступов"
                description="Менеджер видит только своих клиентов. РОП — свой отдел. Вы — всё. 17 типов прав, настройка за 2 минуты."
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════════ FEATURES: SALES ═══════════════ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-lg">
                💼
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">Для менеджера по продажам</h3>
                <p className="text-gray-500 text-sm">Меньше рутины, больше закрытых сделок</p>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimateOnScroll delay={0}>
              <FeatureCard
                icon={<PipelineIcon />}
                title="Kanban-воронка с drag & drop"
                description="Перетаскивайте сделки между этапами. Видите всю картину: что в работе, где застряло, что горит."
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <FeatureCard
                icon={<TasksIcon />}
                title="Задачи и напоминания"
                description="Система сама напомнит: 'Перезвонить Нурланову в 15:00'. Ни один клиент не останется без внимания."
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <FeatureCard
                icon={<MessagesIcon />}
                title="Все мессенджеры в одном окне"
                description="WhatsApp, Telegram, Instagram — все переписки в карточке сделки. Не нужно переключаться между приложениями."
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════════ FEATURES: MARKETER ═══════════════ */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-lg">
                📈
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">Для маркетолога</h3>
                <p className="text-gray-500 text-sm">Докажите эффективность каждого тенге</p>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimateOnScroll delay={0}>
              <FeatureCard
                icon={<CplIcon />}
                title="CPL по каждому каналу"
                description="Стоимость лида из Instagram — 2 800 ₸, из Google — 5 200 ₸. Оптимизируйте бюджет на основе цифр."
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <FeatureCard
                icon={<FunnelIcon />}
                title="Конверсия по этапам"
                description="Из 100 лидов до переговоров доходят 35, до оплаты — 12. Найдите узкое горлышко и устраните его."
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <FeatureCard
                icon={<WebhookIcon />}
                title="Вебхуки и автоматизация"
                description="Новый лид → автоматически в Telegram-бот РОПу. Сделка закрыта → отчёт в Google Sheets. Без программистов."
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════════ INTEGRATIONS ═══════════════ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <span className="text-emerald-700 text-sm font-semibold uppercase tracking-wider">8 каналов</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
                Клиент пишет куда угодно —<br />вы отвечаете из одного окна
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "WhatsApp", color: "bg-green-500", letter: "W" },
              { name: "Telegram", color: "bg-blue-500", letter: "T" },
              { name: "Instagram", color: "bg-gradient-to-br from-purple-500 to-pink-500", letter: "I" },
              { name: "Facebook", color: "bg-blue-600", letter: "f" },
              { name: "Email", color: "bg-gray-700", letter: "@" },
              { name: "VoIP звонки", color: "bg-indigo-500", letter: "V" },
              { name: "Meta Ads", color: "bg-blue-500", letter: "M" },
              { name: "Threads", color: "bg-gray-900", letter: "#" },
            ].map((item, i) => (
              <AnimateOnScroll key={item.name} delay={i * 70}>
                <div className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-3 text-white font-bold text-xl shadow-lg`}>
                    {item.letter}
                  </div>
                  <div className="font-medium text-sm">{item.name}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ COMPARISON ═══════════════ */}
      <section id="compare" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <span className="text-emerald-700 text-sm font-semibold uppercase tracking-wider">Сравнение</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
                Почему GoFalah, а не...
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500 w-1/4"></th>
                    <th className="text-center py-4 px-4">
                      <div className="inline-flex items-center gap-1 bg-emerald-50 px-4 py-2 rounded-full">
                        <span className="font-bold text-emerald-700">GoFalah</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">amoCRM</th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">Bitrix24</th>
                  </tr>
                </thead>
                <tbody>
                  <CompareRow label="Цена за 10 юзеров/мес" gofalah="14 990 ₸" amo="~250 000 ₸" bitrix="~180 000 ₸" />
                  <CompareRow label="Время внедрения" gofalah="1 день" amo="2-4 недели" bitrix="1-3 месяца" />
                  <CompareRow label="WhatsApp интеграция" gofalah="Встроено" amo="Платный виджет" bitrix="Через коннектор" />
                  <CompareRow label="Аналитика ROI/ROMI" gofalah="Встроено" amo="Нет (нужен BI)" bitrix="Ограничено" />
                  <CompareRow label="Простота интерфейса" gofalah="Минимализм" amo="Средне" bitrix="Перегружен" />
                  <CompareRow label="Локализация СНГ" gofalah="Казахстан, РФ, УЗ" amo="РФ фокус" bitrix="РФ фокус" />
                  <CompareRow label="RLS безопасность данных" gofalah="Row-level" amo="Базовая" bitrix="Базовая" />
                  <CompareRow label="AI-модули (скоро)" gofalah="Lead scoring, Advisor" amo="Нет" bitrix="Частично" />
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════ ANALYTICS SECTION ═══════════════ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimateOnScroll>
              <div>
                <span className="text-emerald-700 text-sm font-semibold uppercase tracking-wider">Аналитика</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                  Перестаньте гадать.<br />
                  <span className="gradient-text">Начните считать.</span>
                </h2>
                <p className="text-gray-500 text-lg mb-8">
                  Каждый тенге рекламного бюджета должен быть оправдан. GoFalah показывает,
                  какой канал приносит деньги, а какой — съедает бюджет.
                </p>
                <ul className="space-y-4">
                  <CheckItem text="ROI / ROMI — рентабельность каждого канала" />
                  <CheckItem text="CPL — стоимость привлечения одного лида" />
                  <CheckItem text="Конверсия на каждом этапе воронки" />
                  <CheckItem text="Прогноз выручки на основе pipeline" />
                  <CheckItem text="Средний цикл сделки и средний чек" />
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-900">Отчёт за месяц</h3>
                  <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-medium">Апрель 2026</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <MetricCard label="Выручка" value="12.4M ₸" change="+18%" positive />
                  <MetricCard label="Новые лиды" value="347" change="+24%" positive />
                  <MetricCard label="Конверсия" value="23.5%" change="+3.2%" positive />
                  <MetricCard label="Ср. чек" value="680K ₸" change="+5%" positive />
                </div>
                <div className="h-36 flex items-end gap-2 px-2">
                  {[35, 42, 58, 45, 62, 55, 78, 68, 85, 72, 90, 95].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-gradient-to-t from-emerald-700 to-emerald-300 rounded-t-sm"
                        style={{ height: `${h}%` }}
                      />
                      <span className="text-[9px] text-gray-400">
                        {["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════════ AI ═══════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-900 to-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">Скоро</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
                AI-помощник для продаж
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Искусственный интеллект, который реально помогает продавать больше, а не просто выглядит модно.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            <AnimateOnScroll delay={0}>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Lead Scoring</h3>
                <p className="text-gray-400 leading-relaxed">
                  AI оценит каждого лида от 0 до 100. Менеджеры фокусируются на горячих, а не тратят время на тех, кто &ldquo;просто спросил&rdquo;.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Revenue Advisor</h3>
                <p className="text-gray-400 leading-relaxed">
                  &ldquo;Сделки из Instagram закрываются на 40% чаще. Увеличьте бюджет на 30%&rdquo; — конкретные рекомендации на основе ваших данных.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Replies</h3>
                <p className="text-gray-400 leading-relaxed">
                  AI генерирует ответы клиентам на основе контекста сделки. Менеджер подтверждает одним кликом — экономия 2 часа в день.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════════ PRICING ═══════════════ */}
      <section id="pricing" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <span className="text-emerald-700 text-sm font-semibold uppercase tracking-wider">Тарифы</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
                В 10 раз дешевле amoCRM.<br />Без скрытых платежей.
              </h2>
              <p className="text-gray-500 text-lg">
                Все интеграции включены. Не нужно покупать виджеты отдельно.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <AnimateOnScroll delay={0}>
              <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all">
                <h3 className="text-lg font-semibold mb-1">Старт</h3>
                <p className="text-sm text-gray-500 mb-6">Попробуйте без риска</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">0 ₸</span>
                  <span className="text-gray-400"> / мес</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm text-gray-600">
                  <PricingItem text="До 3 пользователей" />
                  <PricingItem text="1 воронка продаж" />
                  <PricingItem text="500 контактов" />
                  <PricingItem text="WhatsApp + Telegram" />
                  <PricingItem text="Базовая аналитика" />
                </ul>
                <a href="https://gofalah.com/register" className="block text-center border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                  Начать бесплатно
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="border-2 border-emerald-700 rounded-2xl p-8 relative shadow-lg shadow-emerald-100">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-700 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Популярный
                </div>
                <h3 className="text-lg font-semibold mb-1">Бизнес</h3>
                <p className="text-sm text-gray-500 mb-6">Для растущих компаний</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">14 990 ₸</span>
                  <span className="text-gray-400"> / мес</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm text-gray-600">
                  <PricingItem text="До 15 пользователей" />
                  <PricingItem text="Безлимит воронок и контактов" />
                  <PricingItem text="Все 8 интеграций" />
                  <PricingItem text="Расширенная аналитика ROI" />
                  <PricingItem text="RBAC — роли и доступы" />
                  <PricingItem text="Вебхуки и автоматизация" />
                </ul>
                <a href="https://gofalah.com/register" className="block text-center bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-800 transition-colors">
                  Попробовать 14 дней бесплатно
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all">
                <h3 className="text-lg font-semibold mb-1">Корпоративный</h3>
                <p className="text-sm text-gray-500 mb-6">Для больших команд</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">Индив.</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm text-gray-600">
                  <PricingItem text="Безлимит пользователей" />
                  <PricingItem text="AI-модули" />
                  <PricingItem text="API доступ" />
                  <PricingItem text="Выделенный менеджер" />
                  <PricingItem text="SLA и приоритетная поддержка" />
                  <PricingItem text="On-premise установка" />
                </ul>
                <a href="#demo" className="block text-center border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                  Обсудить условия
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════════ SOCIAL PROOF / NUMBERS ═══════════════ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-700">8</div>
                <div className="text-sm text-gray-500 mt-1">каналов коммуникации</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-700">&lt; 1 мин</div>
                <div className="text-sm text-gray-500 mt-1">регистрация</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-700">10x</div>
                <div className="text-sm text-gray-500 mt-1">дешевле amoCRM</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-700">0 ₸</div>
                <div className="text-sm text-gray-500 mt-1">чтобы начать</div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════ LEAD FORM (CTA) ═══════════════ */}
      <section id="demo" className="py-20 md:py-28 bg-gradient-to-br from-emerald-800 to-emerald-950">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Хотите увидеть GoFalah в деле?
                </h2>
                <p className="text-emerald-200 text-lg mb-8 leading-relaxed">
                  Оставьте заявку — мы покажем демо под ваш бизнес, настроим воронку
                  и поможем перенести данные из текущей CRM. Бесплатно.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-emerald-100">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Персональная демонстрация за 30 минут
                  </li>
                  <li className="flex items-center gap-3 text-emerald-100">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Настроим воронку под ваш бизнес
                  </li>
                  <li className="flex items-center gap-3 text-emerald-100">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Поможем перенести данные
                  </li>
                  <li className="flex items-center gap-3 text-emerald-100">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    14 дней бесплатного доступа
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <LeadForm />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image src="/logo.svg" alt="GoFalah" width={120} height={32} className="mb-4 brightness-0 invert" />
              <p className="text-sm leading-relaxed">
                CRM + Аналитика + AI для малого и среднего бизнеса в Казахстане, России и Узбекистане.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#compare" className="hover:text-white transition-colors">Сравнение</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Тарифы</a></li>
                <li><a href="https://gofalah.com/register" className="hover:text-white transition-colors">Регистрация</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:support@gofalah.com" className="hover:text-white transition-colors">Поддержка</a></li>
                <li><a href="mailto:privacy@gofalah.com" className="hover:text-white transition-colors">Конфиденциальность</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li>support@gofalah.com</li>
                <li>Казахстан, Алматы</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            &copy; 2026 GoFalah. Все права защищены.
          </div>
        </div>
      </footer>
    </>
  );
}

/* ═══════════════ КОМПОНЕНТЫ ═══════════════ */

function KanbanColumn({ title, color, count, children, hideOnMobile }: {
  title: string; color: string; count: number; children: React.ReactNode; hideOnMobile?: boolean;
}) {
  return (
    <div className={`space-y-2 ${hideOnMobile ? "hidden md:block" : ""}`}>
      <div className="text-xs font-semibold text-gray-500 flex items-center gap-2 mb-3">
        <div className={`w-2 h-2 rounded-full ${color}`} />
        {title}
        <span className="text-gray-400 ml-auto">{count}</span>
      </div>
      {children}
    </div>
  );
}

function KanbanCard({ name, amount, tag, tagColor }: {
  name: string; amount: string; tag: string; tagColor: string;
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm">
      <div className="text-xs font-medium text-gray-900 mb-1">{name}</div>
      <div className="text-xs text-gray-500 mb-2">{amount}</div>
      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${tagColor}`}>{tag}</span>
    </div>
  );
}

function PainCard({ emoji, title, description }: {
  emoji: string; title: string; description: string;
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:border-red-100 transition-all h-full">
      <div className="text-3xl mb-4">{emoji}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode; title: string; description: string;
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:border-emerald-100 transition-all group h-full">
      <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function CompareRow({ label, gofalah, amo, bitrix }: {
  label: string; gofalah: string; amo: string; bitrix: string;
}) {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <td className="py-4 px-4 text-sm font-medium text-gray-700">{label}</td>
      <td className="py-4 px-4 text-center text-sm font-semibold text-emerald-700">{gofalah}</td>
      <td className="py-4 px-4 text-center text-sm text-gray-500">{amo}</td>
      <td className="py-4 px-4 text-center text-sm text-gray-500">{bitrix}</td>
    </tr>
  );
}

function MetricCard({ label, value, change, positive }: {
  label: string; value: string; change: string; positive: boolean;
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className="text-xl font-bold text-gray-900">{value}</div>
      <div className={`text-xs font-medium mt-1 ${positive ? "text-emerald-600" : "text-red-500"}`}>{change}</div>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <svg className="w-5 h-5 text-emerald-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-gray-600">{text}</span>
    </li>
  );
}

function PricingItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2">
      <svg className="w-4 h-4 text-emerald-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      {text}
    </li>
  );
}

/* ═══════════════ ИКОНКИ ═══════════════ */

function DashboardIcon() {
  return (
    <svg className="w-6 h-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg className="w-6 h-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function PipelineIcon() {
  return (
    <svg className="w-6 h-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>
  );
}

function TasksIcon() {
  return (
    <svg className="w-6 h-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}

function MessagesIcon() {
  return (
    <svg className="w-6 h-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

function RbacIcon() {
  return (
    <svg className="w-6 h-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function CplIcon() {
  return (
    <svg className="w-6 h-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function FunnelIcon() {
  return (
    <svg className="w-6 h-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  );
}

function WebhookIcon() {
  return (
    <svg className="w-6 h-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}

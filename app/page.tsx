export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-0.5 text-2xl tracking-tight">
            <span className="font-medium text-gray-900">Go</span>
            <span className="font-semibold text-accent">Falah</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-accent transition-colors">
              Возможности
            </a>
            <a href="#integrations" className="hover:text-accent transition-colors">
              Интеграции
            </a>
            <a href="#analytics" className="hover:text-accent transition-colors">
              Аналитика
            </a>
            <a href="#pricing" className="hover:text-accent transition-colors">
              Тарифы
            </a>
          </div>
          <a
            href="https://gofalah.com"
            className="bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-emerald-800 transition-colors"
          >
            Войти в CRM
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-amber-50/30" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <div className="animate-fade-in-up">
              <span className="inline-block bg-accent-light text-accent text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-emerald-200">
                CRM + Аналитика + AI
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in-up-delay-1">
              Управляйте бизнесом{" "}
              <span className="gradient-text">умнее</span>, а не{" "}
              <span className="text-gray-400 line-through decoration-2">сложнее</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-10 animate-fade-in-up-delay-2">
              GoFalah — единая платформа для управления клиентами, воронкой продаж
              и аналитикой. Создана для малого и среднего бизнеса в СНГ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-3">
              <a
                href="https://gofalah.com"
                className="bg-accent text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-emerald-800 transition-all hover:shadow-lg hover:shadow-emerald-200 text-center"
              >
                Начать бесплатно
              </a>
              <a
                href="#features"
                className="border border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-base font-semibold hover:bg-gray-50 transition-colors text-center"
              >
                Узнать больше
              </a>
            </div>
          </div>

          {/* Hero visual — абстрактный UI */}
          <div className="mt-16 md:mt-20 relative">
            <div className="bg-white rounded-2xl shadow-2xl shadow-gray-200/60 border border-gray-100 overflow-hidden">
              {/* Browser bar */}
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
              {/* CRM UI mockup */}
              <div className="p-6 grid grid-cols-12 gap-4 min-h-[350px] md:min-h-[450px]">
                {/* Sidebar */}
                <div className="col-span-2 hidden md:block">
                  <div className="space-y-3">
                    <div className="h-8 bg-accent/10 rounded-lg w-full" />
                    <div className="h-6 bg-gray-100 rounded w-full" />
                    <div className="h-6 bg-emerald-50 rounded w-full border-l-2 border-accent" />
                    <div className="h-6 bg-gray-100 rounded w-full" />
                    <div className="h-6 bg-gray-100 rounded w-full" />
                    <div className="h-6 bg-gray-100 rounded w-full" />
                    <div className="h-6 bg-gray-100 rounded w-full" />
                  </div>
                </div>
                {/* Kanban board */}
                <div className="col-span-12 md:col-span-10">
                  <div className="flex gap-1 mb-4">
                    <div className="h-7 w-20 bg-accent/10 rounded text-xs flex items-center justify-center text-accent font-medium">
                      Kanban
                    </div>
                    <div className="h-7 w-20 bg-gray-100 rounded text-xs flex items-center justify-center text-gray-500">
                      Список
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {/* Column: Новые */}
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-gray-500 flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        Новые
                        <span className="text-gray-400 ml-auto">3</span>
                      </div>
                      <KanbanCard name="ТОО Астана Строй" amount="2 500 000 ₸" tag="Горячий" tagColor="bg-red-100 text-red-700" />
                      <KanbanCard name="ИП Нурланов" amount="450 000 ₸" tag="Теплый" tagColor="bg-amber-100 text-amber-700" />
                      <KanbanCard name="Azimut Group" amount="1 200 000 ₸" tag="Новый" tagColor="bg-blue-100 text-blue-700" />
                    </div>
                    {/* Column: Переговоры */}
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-gray-500 flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-amber-400" />
                        Переговоры
                        <span className="text-gray-400 ml-auto">2</span>
                      </div>
                      <KanbanCard name="Mega Almaty" amount="5 800 000 ₸" tag="VIP" tagColor="bg-purple-100 text-purple-700" />
                      <KanbanCard name="Kaspi Solutions" amount="980 000 ₸" tag="Теплый" tagColor="bg-amber-100 text-amber-700" />
                    </div>
                    {/* Column: КП отправлено */}
                    <div className="space-y-2 hidden md:block">
                      <div className="text-xs font-semibold text-gray-500 flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        КП отправлено
                        <span className="text-gray-400 ml-auto">2</span>
                      </div>
                      <KanbanCard name="BTS Logistics" amount="3 400 000 ₸" tag="Горячий" tagColor="bg-red-100 text-red-700" />
                      <KanbanCard name="Prime Education" amount="750 000 ₸" tag="Новый" tagColor="bg-blue-100 text-blue-700" />
                    </div>
                    {/* Column: Закрыто */}
                    <div className="space-y-2 hidden md:block">
                      <div className="text-xs font-semibold text-gray-500 flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        Закрыто
                        <span className="text-gray-400 ml-auto">4</span>
                      </div>
                      <KanbanCard name="QazTech" amount="1 900 000 ₸" tag="Закрыто" tagColor="bg-green-100 text-green-700" />
                      <KanbanCard name="NomadSoft" amount="620 000 ₸" tag="Закрыто" tagColor="bg-green-100 text-green-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">39+</div>
              <div className="text-sm text-gray-500 mt-1">Таблиц в базе</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">8</div>
              <div className="text-sm text-gray-500 mt-1">Каналов интеграций</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">27+</div>
              <div className="text-sm text-gray-500 mt-1">API endpoints</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">RLS</div>
              <div className="text-sm text-gray-500 mt-1">Безопасность данных</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Возможности
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
              Всё для управления продажами
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              От первого контакта до закрытия сделки — контролируйте каждый этап
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<PipelineIcon />}
              title="Воронка продаж"
              description="Kanban-доска с drag & drop. Настраиваемые стадии, причины проигрыша, автонумерация сделок."
            />
            <FeatureCard
              icon={<ContactsIcon />}
              title="Контакты и компании"
              description="Единая база клиентов с полиморфными связями. Кастомные поля, теги, фильтры."
            />
            <FeatureCard
              icon={<TasksIcon />}
              title="Задачи и события"
              description="Планируйте звонки, встречи, дедлайны. Таймлайн активности на каждой сделке."
            />
            <FeatureCard
              icon={<RbacIcon />}
              title="Роли и доступы"
              description="RBAC с 17 типами прав. Отделы, роли, гранулярный контроль доступа."
            />
            <FeatureCard
              icon={<WebhookIcon />}
              title="Вебхуки"
              description="Автоматизируйте процессы. Отправляйте события в ваши системы в реальном времени."
            />
            <FeatureCard
              icon={<RealtimeIcon />}
              title="Realtime обновления"
              description="Изменения мгновенно видны всей команде. Никаких обновлений страницы."
            />
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Интеграции
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
              Все каналы в одном окне
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Общайтесь с клиентами там, где им удобно. Все сообщения — в карточке сделки.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <IntegrationCard name="WhatsApp" color="bg-green-500" letter="W" />
            <IntegrationCard name="Telegram" color="bg-blue-500" letter="T" />
            <IntegrationCard name="Instagram" color="bg-pink-500" letter="I" />
            <IntegrationCard name="Facebook" color="bg-blue-600" letter="F" />
            <IntegrationCard name="Email" color="bg-gray-700" letter="@" />
            <IntegrationCard name="VoIP" color="bg-indigo-500" letter="V" />
            <IntegrationCard name="Meta Ads" color="bg-blue-500" letter="M" />
            <IntegrationCard name="Threads" color="bg-gray-900" letter="#" />
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section id="analytics" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                Аналитика
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
                Принимайте решения на основе данных
              </h2>
              <p className="text-gray-500 text-lg mb-8">
                Отслеживайте ROI, ROMI, CPL по каждому рекламному каналу.
                Понимайте, какая реклама приносит деньги, а какая — сливает бюджет.
              </p>
              <ul className="space-y-4">
                <CheckItem text="Dashboard с KPI в реальном времени" />
                <CheckItem text="ROI / ROMI по рекламным каналам" />
                <CheckItem text="CPL — стоимость каждого лида" />
                <CheckItem text="Конверсия по стадиям воронки" />
                <CheckItem text="Прогноз выручки на основе pipeline" />
              </ul>
            </div>
            {/* Analytics mockup */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Обзор за месяц</h3>
                <span className="text-xs text-gray-400">Апрель 2026</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <MetricCard label="Выручка" value="12.4M ₸" change="+18%" positive />
                <MetricCard label="Новые лиды" value="347" change="+24%" positive />
                <MetricCard label="Конверсия" value="23.5%" change="+3.2%" positive />
                <MetricCard label="Ср. чек" value="680K ₸" change="-2%" positive={false} />
              </div>
              {/* Chart mockup */}
              <div className="h-40 flex items-end gap-2 px-2">
                {[35, 42, 58, 45, 62, 55, 78, 68, 85, 72, 90, 95].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-gradient-to-t from-accent to-emerald-300 rounded-t-sm"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[9px] text-gray-400">
                      {["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-900 to-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
              Скоро
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
              AI который помогает продавать
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Искусственный интеллект анализирует ваши данные и подсказывает,
              на чём фокусироваться
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lead Scoring</h3>
              <p className="text-gray-400">
                AI оценивает вероятность закрытия каждой сделки. Фокусируйтесь на горячих лидах.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Revenue Advisor</h3>
              <p className="text-gray-400">
                Рекомендации по увеличению выручки на основе паттернов успешных сделок.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Replies</h3>
              <p className="text-gray-400">
                Автоматические ответы клиентам в мессенджерах на основе контекста сделки.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Тарифы
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
              Простые и прозрачные цены
            </h2>
            <p className="text-gray-500 text-lg">
              Начните бесплатно. Масштабируйтесь по мере роста.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Free */}
            <div className="border border-gray-200 rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-1">Старт</h3>
              <p className="text-sm text-gray-500 mb-6">Для начала работы</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">0 ₸</span>
                <span className="text-gray-400"> / мес</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <PricingItem text="До 3 пользователей" />
                <PricingItem text="1 воронка продаж" />
                <PricingItem text="500 контактов" />
                <PricingItem text="Базовая аналитика" />
              </ul>
              <a
                href="https://gofalah.com"
                className="block text-center border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                Начать бесплатно
              </a>
            </div>

            {/* Pro */}
            <div className="border-2 border-accent rounded-2xl p-8 relative shadow-lg shadow-emerald-100">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full">
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
                <PricingItem text="Неограниченные воронки" />
                <PricingItem text="Неограниченные контакты" />
                <PricingItem text="Все интеграции" />
                <PricingItem text="Расширенная аналитика" />
                <PricingItem text="RBAC — роли и доступы" />
              </ul>
              <a
                href="https://gofalah.com"
                className="block text-center bg-accent text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-800 transition-colors"
              >
                Попробовать 14 дней
              </a>
            </div>

            {/* Enterprise */}
            <div className="border border-gray-200 rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-1">Корпоративный</h3>
              <p className="text-sm text-gray-500 mb-6">Для крупных команд</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">Индив.</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <PricingItem text="Безлимит пользователей" />
                <PricingItem text="AI-модули" />
                <PricingItem text="API доступ" />
                <PricingItem text="Персональный менеджер" />
                <PricingItem text="SLA и приоритетная поддержка" />
                <PricingItem text="On-premise опция" />
              </ul>
              <a
                href="mailto:support@gofalah.com"
                className="block text-center border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-accent to-emerald-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Готовы вывести продажи на новый уровень?
          </h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
            Начните использовать GoFalah сегодня. Регистрация занимает 2 минуты.
            Кредитная карта не нужна.
          </p>
          <a
            href="https://gofalah.com"
            className="inline-block bg-white text-accent px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-colors shadow-lg"
          >
            Создать аккаунт бесплатно
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <a href="#" className="flex items-baseline gap-0.5 text-2xl tracking-tight mb-4">
                <span className="font-medium text-white">Go</span>
                <span className="font-semibold text-emerald-400">Falah</span>
              </a>
              <p className="text-sm">
                CRM + Аналитика + AI для малого и среднего бизнеса в СНГ.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#integrations" className="hover:text-white transition-colors">Интеграции</a></li>
                <li><a href="#analytics" className="hover:text-white transition-colors">Аналитика</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Тарифы</a></li>
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
            &copy; {new Date().getFullYear()} GoFalah. Все права защищены.
          </div>
        </div>
      </footer>
    </>
  );
}

/* --- Компоненты --- */

function KanbanCard({
  name,
  amount,
  tag,
  tagColor,
}: {
  name: string;
  amount: string;
  tag: string;
  tagColor: string;
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-xs font-medium text-gray-900 mb-1">{name}</div>
      <div className="text-xs text-gray-500 mb-2">{amount}</div>
      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${tagColor}`}>
        {tag}
      </span>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:border-gray-200 transition-all group">
      <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function IntegrationCard({
  name,
  color,
  letter,
}: {
  name: string;
  color: string;
  letter: string;
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-all">
      <div
        className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mx-auto mb-3 text-white font-bold text-xl`}
      >
        {letter}
      </div>
      <div className="font-medium text-sm">{name}</div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  change,
  positive,
}: {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className="text-xl font-bold text-gray-900">{value}</div>
      <div className={`text-xs font-medium mt-1 ${positive ? "text-emerald-600" : "text-red-500"}`}>
        {change}
      </div>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-gray-600">{text}</span>
    </li>
  );
}

function PricingItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2">
      <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      {text}
    </li>
  );
}

/* --- Иконки --- */

function PipelineIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>
  );
}

function ContactsIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function TasksIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}

function RbacIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function WebhookIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}

function RealtimeIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

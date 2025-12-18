import { Button } from "@/components/ui/button"
import { Video, Download, Heart, ChevronDown, Send } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 text-neutral-900 relative overflow-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        />
      </div>
      {/* </CHANGE> */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-blue-200/50 shadow-lg shadow-blue-500/10">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-blue-700">Бета-версия</span>
          </div>
          {/* </CHANGE> */}

          {/* Service Name & Tagline */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-600 bg-clip-text text-transparent">
              Telemost
            </h1>
            {/* </CHANGE> */}
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed text-balance">
              Простой и безопасный видеосвязь
            </p>
            <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed text-pretty">
              Создавайте и подключайтесь к видеозвонкам за несколько секунд
            </p>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white font-semibold px-10 py-7 text-base rounded-2xl min-w-[260px] shadow-xl shadow-neutral-900/20 hover:shadow-2xl hover:shadow-neutral-900/30 hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="https://meet.jit.si" target="_blank" rel="noopener noreferrer">
                <Video className="mr-2 h-5 w-5" />
                Начать видеозвонок
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-neutral-900/80 bg-white/80 backdrop-blur-sm hover:bg-neutral-900 hover:text-white text-neutral-900 font-semibold px-10 py-7 text-base rounded-2xl min-w-[260px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="#download">
                <Download className="mr-2 h-5 w-5" />
                Скачать приложение
              </a>
            </Button>
            {/* </CHANGE> */}
          </div>

          {/* Beta Notice */}
          <p className="text-sm text-neutral-400 pt-8 max-w-xl mx-auto leading-relaxed">
            Сервис находится в стадии бета-тестирования. Возможны технические сбои.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-neutral-400" strokeWidth={2} />
        </div>
      </section>

      {/* Video Demonstrations Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Как пользоваться</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto text-balance leading-relaxed">
              Смотрите краткие видеоинструкции для веб и мобильных устройств
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="aspect-video overflow-hidden rounded-3xl bg-neutral-100 shadow-2xl shadow-neutral-900/10 ring-1 ring-neutral-200/50">
                <video className="w-full h-full object-cover" controls poster="/video-conferencing-on-laptop.jpg">
                  <source src="/videos/web-usage.mp4" type="video/mp4" />
                  Ваш браузер не поддерживает видео.
                </video>
              </div>
              <h3 className="text-xl font-semibold text-center">Использование в браузере</h3>
            </div>

            <div className="space-y-6">
              <div className="aspect-video overflow-hidden rounded-3xl bg-neutral-100 shadow-2xl shadow-neutral-900/10 ring-1 ring-neutral-200/50">
                <video className="w-full h-full object-cover" controls poster="/video-conferencing-on-mobile-phone.jpg">
                  <source src="/videos/mobile-usage.mp4" type="video/mp4" />
                  Ваш браузер не поддерживает видео.
                </video>
              </div>
              <h3 className="text-xl font-semibold text-center">Использование в смартфоне</h3>
            </div>
            {/* </CHANGE> */}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Узнать больше</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed text-balance">
              Следите за обновлениями и получайте поддержку в Telegram канале и чате
            </p>
          </div>
          <div className="flex flex-col sm:flex-row mt-12 justify-center items-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-neutral-900/80 bg-white/80 backdrop-blur-sm hover:bg-neutral-900 hover:text-white text-neutral-900 font-semibold px-10 py-7 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="https://t.me/telemost_support" target="_blank" rel="noopener noreferrer">
                <Send className="mr-2 h-5 w-5" />
                Канал в Telegram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Скачайте приложение</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed text-balance">
              Используйте Telemost на iOS и Android для максимального удобства
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-neutral-900/80 bg-white/80 backdrop-blur-sm hover:bg-neutral-900 hover:text-white text-neutral-900 font-semibold px-10 py-7 rounded-2xl min-w-[220px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="https://apps.apple.com/app/jitsi-meet/id1165103905" target="_blank" rel="noopener noreferrer">
                <svg className="mr-3 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-neutral-900/80 bg-white/80 backdrop-blur-sm hover:bg-neutral-900 hover:text-white text-neutral-900 font-semibold px-10 py-7 rounded-2xl min-w-[220px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <a
                href="https://play.google.com/store/apps/details?id=org.jitsi.meet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="mr-3 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </a>
            </Button>
            {/* </CHANGE> */}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-neutral-200/60 shadow-lg shadow-neutral-900/5 p-10 md:p-14 text-center space-y-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-100 border border-amber-200">
              <Heart className="h-8 w-8 text-amber-600" />
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Нравится Telemost?
              </h2>
            </div>

            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-10 py-6 rounded-2xl shadow-lg shadow-amber-500/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="https://donate.example.com" target="_blank" rel="noopener noreferrer">
                Поддержать проект
              </a>
            </Button>

            <p className="text-sm text-neutral-500">
              100% средств идёт на развитие сервиса
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-neutral-200/50 bg-white/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <p className="text-2xl font-bold">Telemost</p>
            <p className="text-sm text-neutral-500">Простой и безопасный видеосвязь</p>
          </div>

          <div className="pt-8 border-t border-neutral-200/50 text-center space-y-2">
            <p className="text-sm text-neutral-500 leading-relaxed">
              Бета-версия. Возможны ошибки — мы активно улучшаем сервис.
            </p>
            <p className="text-xs text-neutral-400">© 2025 Telemost. Построено на базе Jitsi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

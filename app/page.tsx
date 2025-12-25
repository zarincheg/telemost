import { Button } from "@/components/ui/button"
import { Heart, ChevronDown, Send } from "lucide-react"
import { StartMeetingButton } from "@/components/start-meeting-button"
import { AppDownloadButtons, DownloadAppButton } from "@/components/app-download-buttons"

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
              Звонить домой
            </p>
            <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed text-pretty">
              Создавайте и подключайтесь к видеозвонкам за несколько секунд
            </p>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <StartMeetingButton />
            <DownloadAppButton />
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
              <a href="https://t.me/telemostlive" target="_blank" rel="noopener noreferrer">
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
            <AppDownloadButtons />
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

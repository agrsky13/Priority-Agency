interface PrivacyPolicyProps {
  onClose: () => void;
}

export function PrivacyPolicy({ onClose }: PrivacyPolicyProps) {

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-neutral-900 border border-neutral-400/20 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-300">
              Политика конфиденциальности
            </h2>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-neutral-300 text-2xl transition-colors"
            >
              ×
            </button>
          </div>

          <div className="space-y-6 text-neutral-400 leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-neutral-300 mb-3">
                1. Общие положения
              </h3>
              <p>
                Настоящая Политика конфиденциальности определяет порядок обработки персональных данных 
                пользователей сайта Priority Agency. Мы обязуемся защищать вашу конфиденциальность и 
                обеспечивать безопасность ваших персональных данных.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-300 mb-3">
                2. Сбор персональных данных
              </h3>
              <p>
                Мы можем собирать следующие категории персональных данных:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Контактная информация (имя, телефон, email)</li>
                <li>Информация о ваших запросах и обращениях</li>
                <li>Техническая информация (IP-адрес, тип браузера)</li>
                <li>Файлы cookie для улучшения работы сайта</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-300 mb-3">
                3. Цели обработки данных
              </h3>
              <p>
                Ваши персональные данные используются для:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Обработки ваших запросов и обращений</li>
                <li>Предоставления консультационных услуг</li>
                <li>Улучшения качества наших услуг</li>
                <li>Соблюдения требований законодательства</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-300 mb-3">
                4. Защита данных
              </h3>
              <p>
                Мы применяем современные технические и организационные меры для защиты ваших 
                персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-300 mb-3">
                5. Передача данных третьим лицам
              </h3>
              <p>
                Мы не передаем ваши персональные данные третьим лицам, за исключением случаев, 
                предусмотренных законодательством РФ или с вашего явного согласия.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-300 mb-3">
                6. Ваши права
              </h3>
              <p>
                Вы имеете право на получение информации о ваших персональных данных, их исправление, 
                удаление или ограничение обработки. Для реализации этих прав обращайтесь к нам 
                по контактным данным, указанным на сайте.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-300 mb-3">
                7. Контактная информация
              </h3>
              <p>
                По вопросам обработки персональных данных обращайтесь:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Email: priorityagency@proton.me</li>
                <li>Телефон: +7 (900) 138-57-80</li>
                <li>Telegram: @dtctv</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-neutral-400/20">
              <p className="text-sm text-neutral-500">
                Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-neutral-400/20 to-neutral-400/10 hover:from-neutral-400/30 hover:to-neutral-400/20 backdrop-blur-xl border border-neutral-400/30 text-neutral-300 px-6 py-3 rounded-xl transition-all duration-300 font-medium hover:scale-105"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


import React, { useState } from 'react';

interface BlogPageProps {
  setCurrentPage: (page: string) => void;
}

interface ArticleProps {
  post: any;
  onBack: () => void;
}

function Article1({ post, onBack }: ArticleProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <button onClick={onBack} className="text-neutral-400 hover:text-neutral-300 transition-colors duration-300 mb-8 flex items-center space-x-2">
            <span>←</span>
            <span>Вернуться к блогу</span>
          </button>
          
          <article className="bg-gradient-to-br from-neutral-700/30 to-neutral-600/30 backdrop-blur-xl border border-neutral-400/10 rounded-3xl p-8">
            <div className="mb-6">
              <span className="inline-block bg-neutral-400/10 backdrop-blur-xl border border-neutral-400/20 text-neutral-300 px-3 py-1 rounded-full text-xs font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-300 mb-4">{post.title}</h1>
              <div className="flex items-center text-sm text-neutral-400 mb-6">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-400 leading-relaxed mb-6">
                Поиск пропавших людей - одна из самых сложных и ответственных задач в детективной работе. Когда человек исчезает, каждая минута может быть решающей. В России ежегодно пропадает более 100 тысяч человек, и только профессиональный подход может обеспечить их скорейшее возвращение домой.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Первые действия при исчезновении</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                В первые часы после исчезновения важно действовать быстро и системно. Начните с проверки всех возможных мест, где мог находиться человек: дом, работа, места отдыха, больницы, полицейские участки. Составьте список всех знакомых и коллег, которые могли видеть пропавшего в последнее время.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Немедленно обратитесь в полицию с заявлением о пропаже. Предоставьте фотографию, описание внешности, последние известные места пребывания. Важно сохранить все личные вещи пропавшего для возможного использования служебных собак.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Обращение к профессионалам</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Частные детективы имеют доступ к базам данных и специальным методам поиска, недоступным обычным гражданам. Обращение к профессионалам значительно увеличивает шансы на успех. Детективы могут работать параллельно с полицией, используя свои контакты и методы.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Профессиональные детективы имеют опыт работы с различными случаями исчезновений: от подростков, сбежавших из дома, до взрослых людей, попавших в криминальные ситуации. Они знают, как правильно организовать поисковые мероприятия и привлечь необходимые ресурсы.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Современные методы поиска</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Сегодня в поиске людей используются цифровые технологии, анализ социальных сетей, проверка банковских операций и многое другое. Профессиональные детективы знают, как эффективно использовать эти инструменты.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Анализ мобильных устройств позволяет установить последние звонки, сообщения и местоположение. Банковские операции могут показать, где человек совершал покупки или снимал деньги. Социальные сети часто содержат информацию о планах и намерениях пропавшего.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Работа с информацией</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Эффективный поиск требует систематизации всей доступной информации. Детективы создают временную линию событий, анализируют поведенческие паттерны пропавшего, изучают его социальные связи и финансовые транзакции.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Важно помнить, что в первые 48 часов после исчезновения шансы на успешный поиск максимальны. Поэтому обращение к профессионалам должно быть незамедлительным. Каждый случай уникален, и только опытный детектив может определить оптимальную стратегию поиска для конкретной ситуации.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

function Article2({ post, onBack }: ArticleProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <button onClick={onBack} className="text-neutral-400 hover:text-neutral-300 transition-colors duration-300 mb-8 flex items-center space-x-2">
            <span>←</span>
            <span>Вернуться к блогу</span>
          </button>
          
          <article className="bg-gradient-to-br from-neutral-700/30 to-neutral-600/30 backdrop-blur-xl border border-neutral-400/10 rounded-3xl p-8">
            <div className="mb-6">
              <span className="inline-block bg-neutral-400/10 backdrop-blur-xl border border-neutral-400/20 text-neutral-300 px-3 py-1 rounded-full text-xs font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-300 mb-4">{post.title}</h1>
              <div className="flex items-center text-sm text-neutral-400 mb-6">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-400 leading-relaxed mb-6">
                Корпоративная безопасность в современном мире требует комплексного подхода. Промышленный шпионаж и утечки информации могут нанести непоправимый ущерб бизнесу. По данным исследований, 60% компаний сталкиваются с корпоративным мошенничеством, а ущерб от промышленного шпионажа может достигать миллионов долларов.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Основные угрозы корпоративной безопасности</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Основные угрозы включают промышленный шпионаж, утечку коммерческой тайны, корпоративное мошенничество и внутренние угрозы от нелояльных сотрудников. Современные технологии сделали эти угрозы более изощренными и трудными для обнаружения.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Промышленный шпионаж может осуществляться через внедрение агентов в компанию, подкуп сотрудников, использование технических средств слежения или кибератак. Конкуренты могут получить доступ к технологическим секретам, клиентским базам, стратегическим планам развития.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Внутренние угрозы</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Наиболее опасными являются внутренние угрозы от нелояльных сотрудников. Такие люди имеют доступ к конфиденциальной информации и могут нанести максимальный ущерб. Мотивы могут быть различными: финансовые проблемы, обида на руководство, предложения от конкурентов.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Признаками потенциальной угрозы могут быть: резкие изменения в поведении сотрудника, повышенный интерес к конфиденциальной информации, попытки скопировать данные, частые контакты с конкурентами.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Методы защиты информации</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Эффективная защита включает проверку сотрудников, мониторинг корпоративных коммуникаций, анализ поведения персонала и технические средства защиты информации. Важно создать многоуровневую систему безопасности.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Технические меры включают: установку систем видеонаблюдения, мониторинг корпоративной сети, контроль доступа к информации, шифрование данных. Организационные меры: подписание соглашений о неразглашении, регулярные проверки персонала, обучение сотрудников основам информационной безопасности.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Роль частных детективов</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Частные детективы помогают выявлять утечки информации, проверять благонадежность партнеров и сотрудников, а также проводить расследования корпоративного мошенничества. Они используют специальные методы и имеют доступ к закрытым источникам информации.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Детективы могут провести скрытое наблюдение за подозрительными сотрудниками, проверить их связи и контакты, проанализировать финансовое состояние. В случае обнаружения утечки информации, детективы помогут установить источник и предотвратить дальнейшие потери. Своевременное обращение к профессионалам может спасти бизнес от серьезных финансовых и репутационных потерь.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

function Article3({ post, onBack }: ArticleProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <button onClick={onBack} className="text-neutral-400 hover:text-neutral-300 transition-colors duration-300 mb-8 flex items-center space-x-2">
            <span>←</span>
            <span>Вернуться к блогу</span>
          </button>
          
          <article className="bg-gradient-to-br from-neutral-700/30 to-neutral-600/30 backdrop-blur-xl border border-neutral-400/10 rounded-3xl p-8">
            <div className="mb-6">
              <span className="inline-block bg-neutral-400/10 backdrop-blur-xl border border-neutral-400/20 text-neutral-300 px-3 py-1 rounded-full text-xs font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-300 mb-4">{post.title}</h1>
              <div className="flex items-center text-sm text-neutral-400 mb-6">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-400 leading-relaxed mb-6">
                В современном мире практически каждый человек оставляет цифровые следы. Социальные сети, банковские операции, GPS-данные - все это может быть использовано в расследованиях. Цифровая криминалистика стала неотъемлемой частью современной детективной работы.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Анализ социальных сетей</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Профили в социальных сетях содержат огромное количество информации о человеке: его интересы, круг общения, места посещения и многое другое. Детективы анализируют не только публичные посты, но и метаданные фотографий, геотеги, время публикаций.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Важную роль играет анализ друзей и подписчиков. Через социальные связи можно выявить скрытые контакты, установить круг общения, понять образ жизни человека. Современные инструменты позволяют создавать карты связей и выявлять скрытые паттерны поведения.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Банковские операции и финансовая активность</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Анализ банковских операций помогает установить местонахождение человека, его финансовые связи и образ жизни. Каждая транзакция содержит информацию о времени, месте и характере покупки.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Детективы анализируют: регулярные платежи (аренда, кредиты), покупки в определенных местах, переводы денег, использование банкоматов. Это позволяет создать картину перемещений и образа жизни человека. Особое внимание уделяется необычным транзакциям или изменениям в финансовом поведении.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">GPS и геолокация</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Современные технологии позволяют отслеживать перемещения людей через мобильные устройства, автомобильные навигаторы и другие гаджеты. GPS-данные могут показать маршруты передвижения, часто посещаемые места, время пребывания в определенных локациях.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Анализ геолокационных данных помогает установить: где человек живет, работает, отдыхает, с кем встречается. Важно помнить о правовых ограничениях - сбор такой информации требует соответствующих разрешений.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Мобильные устройства и приложения</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Смартфоны содержат огромное количество информации: историю звонков, сообщения, фотографии, данные приложений. Детективы могут получить доступ к этой информации при наличии соответствующих разрешений.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Современные приложения для фитнеса, навигации, социальных сетей постоянно собирают данные о местоположении и активности пользователя. Анализ этих данных может дать ценную информацию для расследования. Важно отметить, что работа с цифровыми следами требует специальных знаний и соблюдения правовых норм.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

function Article4({ post, onBack }: ArticleProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <button onClick={onBack} className="text-neutral-400 hover:text-neutral-300 transition-colors duration-300 mb-8 flex items-center space-x-2">
            <span>←</span>
            <span>Вернуться к блогу</span>
          </button>
          
          <article className="bg-gradient-to-br from-neutral-700/30 to-neutral-600/30 backdrop-blur-xl border border-neutral-400/10 rounded-3xl p-8">
            <div className="mb-6">
              <span className="inline-block bg-neutral-400/10 backdrop-blur-xl border border-neutral-400/20 text-neutral-300 px-3 py-1 rounded-full text-xs font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-300 mb-4">{post.title}</h1>
              <div className="flex items-center text-sm text-neutral-400 mb-6">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-400 leading-relaxed mb-6">
                Психология лжи - это сложная наука, которая изучает признаки обмана в поведении человека. Профессиональные детективы используют эти знания в своей работе. По статистике, люди лгут в среднем 2-3 раза в день, и умение распознавать ложь является критически важным навыком для детектива.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Вербальные признаки лжи</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                К вербальным признакам относятся неопределенные ответы, избегание прямых вопросов, излишняя детализация или, наоборот, отсутствие деталей. Лжецы часто используют общие фразы, избегают местоимения "я", используют прошедшее время вместо настоящего.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Важными индикаторами являются: повторение вопроса перед ответом, излишние объяснения, использование слов-паразитов, изменение тембра голоса. Лжецы часто дают слишком подробные ответы на простые вопросы или, наоборот, слишком краткие ответы на сложные вопросы.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Невербальные сигналы</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Жесты, мимика, поза тела - все это может выдать лжеца. Важно анализировать совокупность признаков, а не отдельные сигналы. Классические признаки включают: прикосновения к лицу, потирание глаз, прикрытие рта рукой.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Микровыражения - это кратковременные изменения в мимике, которые длятся доли секунды. Они являются непроизвольными и могут выдать истинные эмоции человека. Детективы специально обучены распознавать эти микросигналы.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Поза тела также может многое рассказать: скрещенные руки, отведение взгляда, изменение положения ног. Важно учитывать культурные особенности и индивидуальные особенности человека.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Физиологические реакции</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                При лжи организм испытывает стресс, что проявляется в физиологических реакциях: учащение пульса, изменение дыхания, потливость ладоней, расширение зрачков. Современные детекторы лжи (полиграфы) основаны на измерении этих параметров.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Однако важно помнить, что физиологические реакции могут быть вызваны не только ложью, но и стрессом, страхом, волнением. Поэтому результаты полиграфа не являются абсолютно достоверными и не могут использоваться как единственное доказательство.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Методы выявления лжи</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Современные детективы используют специальные техники допроса, анализ микровыражений и психологические методы для выявления лжи. Важным является создание правильной атмосферы для беседы.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Эффективные техники включают: задавание неожиданных вопросов, анализ последовательности событий, проверка деталей, наблюдение за реакцией на различные темы. Профессиональные детективы знают, что каждый человек уникален, и признаки лжи могут проявляться по-разному у разных людей.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

function Article5({ post, onBack }: ArticleProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <button onClick={onBack} className="text-neutral-400 hover:text-neutral-300 transition-colors duration-300 mb-8 flex items-center space-x-2">
            <span>←</span>
            <span>Вернуться к блогу</span>
          </button>
          
          <article className="bg-gradient-to-br from-neutral-700/30 to-neutral-600/30 backdrop-blur-xl border border-neutral-400/10 rounded-3xl p-8">
            <div className="mb-6">
              <span className="inline-block bg-neutral-400/10 backdrop-blur-xl border border-neutral-400/20 text-neutral-300 px-3 py-1 rounded-full text-xs font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-300 mb-4">{post.title}</h1>
              <div className="flex items-center text-sm text-neutral-400 mb-6">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-400 leading-relaxed mb-6">
                Частная детективная деятельность в России строго регламентирована законом. Важно знать границы дозволенного и запрещенного. Деятельность частных детективов регулируется Законом РФ "О частной детективной и охранной деятельности" и другими нормативными актами.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Что разрешено частному детективу</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Частный детектив может собирать информацию из открытых источников, проводить наблюдение в общественных местах, опрашивать свидетелей с их согласия. Также разрешено изучение документов и материалов, предоставленных заказчиком.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Детективы могут проводить сбор информации о лицах, организациях, событиях по заказам граждан и организаций. Это включает поиск пропавших людей, проверку благонадежности партнеров, сбор доказательств для судебных дел.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Правовые ограничения</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Запрещено проникновение в жилище без разрешения, нарушение тайны переписки, использование специальных технических средств без лицензии. Также запрещено собирать информацию, составляющую государственную тайну.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Детективы не могут осуществлять оперативно-розыскную деятельность, которая является прерогативой правоохранительных органов. Запрещено использование методов, нарушающих конституционные права граждан.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Лицензирование деятельности</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Частная детективная деятельность требует специальной лицензии. Без лицензии деятельность является незаконной. Лицензия выдается органами внутренних дел при соблюдении определенных требований.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Для получения лицензии необходимо: достижение 21 года, отсутствие судимости, прохождение специальной подготовки, наличие медицинской справки о годности к работе с оружием.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Ответственность детектива</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Частные детективы несут ответственность за соблюдение конфиденциальности полученной информации. Они обязаны хранить тайну сведений, полученных в ходе работы, и не могут разглашать их без согласия заказчика.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                При нарушении закона детектив может быть привлечен к административной или уголовной ответственности. Важно обращаться только к лицензированным детективам, которые соблюдают все правовые нормы и гарантируют качество услуг.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

function Article6({ post, onBack }: ArticleProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <button onClick={onBack} className="text-neutral-400 hover:text-neutral-300 transition-colors duration-300 mb-8 flex items-center space-x-2">
            <span>←</span>
            <span>Вернуться к блогу</span>
          </button>
          
          <article className="bg-gradient-to-br from-neutral-700/30 to-neutral-600/30 backdrop-blur-xl border border-neutral-400/10 rounded-3xl p-8">
            <div className="mb-6">
              <span className="inline-block bg-neutral-400/10 backdrop-blur-xl border border-neutral-400/20 text-neutral-300 px-3 py-1 rounded-full text-xs font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-300 mb-4">{post.title}</h1>
              <div className="flex items-center text-sm text-neutral-400 mb-6">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-400 leading-relaxed mb-6">
                Современные технологии слежения значительно расширили возможности частных детективов. От миниатюрных камер до спутниковых систем - арсенал постоянно обновляется. Однако важно помнить, что использование таких технологий строго регламентировано законом.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Видеонаблюдение и скрытые камеры</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Миниатюрные камеры, скрытые в различных предметах, позволяют вести наблюдение без обнаружения. Важно помнить о правовых ограничениях. Современные камеры могут быть размером с монету и передавать изображение в реальном времени.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Технологии видеонаблюдения включают: камеры-пуговицы, камеры в очках, камеры в часах, камеры в автомобилях. Качество изображения постоянно улучшается, а время работы от батареи увеличивается. Однако использование таких устройств в частных помещениях без разрешения является незаконным.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">GPS-трекинг и геолокация</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Современные GPS-трекеры позволяют отслеживать перемещения объектов в реальном времени. Технология постоянно совершенствуется. Трекеры могут быть установлены в автомобили, сумки, одежду или другие предметы.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Современные GPS-устройства имеют точность до нескольких метров, могут работать в течение нескольких месяцев от одной батареи и передавать данные через мобильную сеть или спутниковую связь. Важно помнить, что установка трекеров на чужие автомобили или имущество без разрешения является нарушением закона.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Электронная разведка</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Анализ электронных устройств, перехват сигналов и другие методы электронной разведки требуют специальных знаний и оборудования. Современные детективы используют специальные сканеры и анализаторы сигналов.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Методы электронной разведки включают: анализ радиосигналов, перехват беспроводных коммуникаций, анализ электромагнитных излучений электронных устройств. Эти методы требуют специального оборудования и лицензий.
              </p>
              
              <h2 className="text-2xl font-bold text-neutral-300 mb-4">Дроны и аэрофотосъемка</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Современные дроны с камерами высокого разрешения позволяют вести наблюдение с воздуха. Это особенно полезно для наблюдения за большими территориями или труднодоступными местами.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Дроны могут работать автономно, следуя заданному маршруту, и передавать видео в реальном времени. Однако их использование также регулируется законом и требует соответствующих разрешений. Важно соблюдать правила полетов и не нарушать права на частную жизнь.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export function BlogPage({ setCurrentPage }: BlogPageProps) {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  // Прокручиваем в начало страницы при загрузке блога
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Как найти пропавшего человека",
      excerpt: "Пошаговое руководство по поиску пропавших людей. Что делать в первые часы и как организовать эффективный поиск.",
      date: "15 декабря 2024",
      readTime: "8 мин",
      category: "Поиск людей"
    },
    {
      id: 2,
      title: "Корпоративная безопасность",
      excerpt: "Защита от промышленного шпионажа и утечки конфиденциальной информации в бизнесе.",
      date: "10 декабря 2024",
      readTime: "12 мин",
      category: "Корпоративные расследования"
    },
    {
      id: 3,
      title: "Цифровые следы в расследованиях",
      excerpt: "Роль социальных сетей и цифровых технологий в современных детективных расследованиях.",
      date: "5 декабря 2024",
      readTime: "10 мин",
      category: "Технологии"
    },
    {
      id: 4,
      title: "Психология лжи",
      excerpt: "Научные методы определения лжи и основные признаки обмана при общении.",
      date: "1 декабря 2024",
      readTime: "6 мин",
      category: "Психология"
    },
    {
      id: 5,
      title: "Правовые аспекты частного сыска",
      excerpt: "Что можно и нельзя делать частному детективу по российскому законодательству.",
      date: "25 ноября 2024",
      readTime: "15 мин",
      category: "Право"
    },
    {
      id: 6,
      title: "Современные технологии слежения",
      excerpt: "Обзор современного оборудования для скрытого наблюдения и мониторинга.",
      date: "20 ноября 2024",
      readTime: "9 мин",
      category: "Технологии"
    }
  ];

  const handlePostClick = (postId: number) => {
    setSelectedArticle(postId);
  };

  const handleBack = () => {
    setSelectedArticle(null);
    // Прокручиваем в начало при возврате из статьи
    window.scrollTo(0, 0);
  };

  // Если выбрана статья, показываем её
  if (selectedArticle) {
    const post = blogPosts.find(p => p.id === selectedArticle);
    if (!post) return null;

    switch (selectedArticle) {
      case 1:
        return <Article1 post={post} onBack={handleBack} />;
      case 2:
        return <Article2 post={post} onBack={handleBack} />;
      case 3:
        return <Article3 post={post} onBack={handleBack} />;
      case 4:
        return <Article4 post={post} onBack={handleBack} />;
      case 5:
        return <Article5 post={post} onBack={handleBack} />;
      case 6:
        return <Article6 post={post} onBack={handleBack} />;
      default:
        return null;
    }
  }

  // Основная страница блога
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-r from-neutral-400/5 to-neutral-500/5 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-r from-neutral-500/3 to-neutral-400/3 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-24">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-neutral-400/10 backdrop-blur-xl border border-neutral-400/20 text-neutral-300 px-6 py-3 rounded-full text-sm font-medium mb-6">
            Блог
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-300 mb-6">
            Экспертные материалы
            <span className="bg-gradient-to-r from-neutral-400 to-neutral-200 bg-clip-text text-transparent block">
              о детективной работе
            </span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Полезные статьи от профессиональных детективов
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="group bg-gradient-to-br from-neutral-700/30 to-neutral-600/30 backdrop-blur-xl border border-neutral-400/10 rounded-3xl overflow-hidden hover:bg-neutral-400/10 hover:shadow-xl hover:shadow-neutral-400/5 transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => handlePostClick(post.id)}
            >
              {/* Post Header */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-neutral-400/10 backdrop-blur-xl border border-neutral-400/20 text-neutral-300 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-300 mb-4 group-hover:text-neutral-200 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>

                <p className="text-neutral-400 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-center text-sm text-neutral-500 mb-6">
                  <span>{post.readTime}</span>
                </div>

                {/* Read More Button */}
                <div className="w-full bg-gradient-to-r from-neutral-400/20 to-neutral-400/10 backdrop-blur-xl border border-neutral-400/30 text-neutral-300 py-3 rounded-xl hover:from-neutral-400/30 hover:to-neutral-400/20 transition-all duration-300 font-medium text-center">
                  Читать полностью
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <button 
            onClick={() => {
              setCurrentPage('home');
              // Прокручиваем в начало главной страницы
              window.scrollTo(0, 0);
            }}
            className="text-neutral-400 hover:text-neutral-300 transition-colors duration-300 flex items-center justify-center space-x-2 mx-auto"
          >
            <span>←</span>
            <span>Вернуться на главную</span>
          </button>
        </div>
      </div>
    </div>
  );
}
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Construction" size={32} className="text-primary" />
            <span className="text-xl font-bold text-secondary">СпецТехСервис</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#equipment" className="text-foreground hover:text-primary transition-colors">Техника</a>
            <a href="#prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-white to-primary/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
                Аренда спецтехники для любых задач
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Экскаваторы-погрузчики и самосвалы с опытными операторами. Работаем быстро, качественно и по доступным ценам.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Узнать стоимость
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-primary" size={24} />
                  <span className="text-sm">Работаем 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-primary" size={24} />
                  <span className="text-sm">Опытные операторы</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-primary" size={24} />
                  <span className="text-sm">Быстрая подача</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/bae71623-33e6-4983-9ab7-004d8f771e73/files/a0e1e9bb-2d16-4937-9eab-3fa8fdc96ade.jpg" 
                alt="Спецтехника на стройке" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Профессиональное выполнение земляных и строительных работ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'Drill', title: 'Земляные работы', desc: 'Копка котлованов, траншей, планировка участков любой сложности' },
              { icon: 'Truck', title: 'Вывоз грунта', desc: 'Транспортировка грунта, строительного мусора самосвалами' },
              { icon: 'Hammer', title: 'Демонтаж', desc: 'Снос зданий и сооружений, разборка фундаментов' },
              { icon: 'Trees', title: 'Благоустройство', desc: 'Планировка территории, засыпка ям, выравнивание участков' },
              { icon: 'Mountain', title: 'Разработка грунта', desc: 'Работа в любых типах почв, включая мерзлый грунт' },
              { icon: 'Home', title: 'Строительство', desc: 'Подготовка площадок под фундамент, прокладка коммуникаций' }
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon name={service.icon} size={28} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Наша техника</h2>
            <p className="text-xl text-muted-foreground">Современное оборудование в отличном состоянии</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/544cd2ce-0c81-4554-b3ba-376c13a167ef.png" 
                  alt="Экскаватор-погрузчик" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Экскаватор-погрузчик Volvo BL71</CardTitle>
                <CardDescription className="text-base">Универсальная машина для земляных работ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Icon name="Gauge" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Мощность</div>
                      <div className="text-sm text-muted-foreground">109 л.с.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Scale" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Вес</div>
                      <div className="text-sm text-muted-foreground">8 500 кг</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="ArrowDownUp" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Глубина копания</div>
                      <div className="text-sm text-muted-foreground">5,7 м</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Box" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Объем ковша</div>
                      <div className="text-sm text-muted-foreground">1,0 м³</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6" size="lg">
                  Заказать технику
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/baa06a55-2498-4bda-ada1-428f7358dc79.png" 
                  alt="Самосвал" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Самосвал JAC N350</CardTitle>
                <CardDescription className="text-base">Для вывоза грунта и доставки материалов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Icon name="Gauge" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Мощность</div>
                      <div className="text-sm text-muted-foreground">320 л.с.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Weight" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Грузоподъемность</div>
                      <div className="text-sm text-muted-foreground">20 тонн</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Maximize" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Объем кузова</div>
                      <div className="text-sm text-muted-foreground">12 м³</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Ruler" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Габариты</div>
                      <div className="text-sm text-muted-foreground">7,7 × 2,5 × 3,0 м</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6" size="lg">
                  Заказать технику
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Цены на услуги</h2>
            <p className="text-xl text-muted-foreground">Прозрачные тарифы без скрытых платежей</p>
          </div>
          <div className="space-y-4">
            {[
              { service: 'Экскаватор-погрузчик', price: 'от 1 500 ₽/час', desc: 'Минимальный заказ - 4 часа' },
              { service: 'Самосвал 20 тонн', price: 'от 1 200 ₽/час', desc: 'Стоимость вывоза - от объема' },
              { service: 'Копка траншеи', price: 'от 300 ₽/м³', desc: 'Цена зависит от грунта' },
              { service: 'Планировка участка', price: 'от 25 000 ₽', desc: 'Расчет по площади' },
              { service: 'Вывоз грунта', price: 'от 800 ₽/рейс', desc: 'В пределах города' }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{item.service}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <div className="text-2xl font-bold text-primary whitespace-nowrap">{item.price}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
            <div className="flex items-start gap-3">
              <Icon name="Info" className="text-primary mt-1" size={24} />
              <div>
                <h4 className="font-semibold mb-2">Индивидуальный расчет</h4>
                <p className="text-muted-foreground">
                  Окончательная стоимость зависит от объема работ, удаленности объекта и типа грунта. 
                  Оставьте заявку для точного расчета стоимости под ваш проект.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Ответим на все вопросы и рассчитаем стоимость</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Phone" className="text-primary" size={28} />
                    </div>
                    <h3 className="font-semibold mb-2">Телефон</h3>
                    <a href="tel:+79001234567" className="text-lg text-primary hover:underline">
                      +7 (900) 123-45-67
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Работаем круглосуточно</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Mail" className="text-primary" size={28} />
                    </div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a href="mailto:info@spectehservis.ru" className="text-lg text-primary hover:underline">
                      info@spectehservis.ru
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="MapPin" className="text-primary" size={28} />
                    </div>
                    <h3 className="font-semibold mb-2">Офис</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Строительная, 15</p>
                    <p className="text-sm text-muted-foreground mt-1">Пн-Вс: 8:00 - 20:00</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Construction" size={28} />
                <span className="text-xl font-bold">СпецТехСервис</span>
              </div>
              <p className="text-white/80">
                Профессиональные услуги спецтехники для строительства и земляных работ
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Быстрые ссылки</h3>
              <div className="space-y-2">
                <a href="#services" className="block text-white/80 hover:text-white transition-colors">Услуги</a>
                <a href="#equipment" className="block text-white/80 hover:text-white transition-colors">Техника</a>
                <a href="#prices" className="block text-white/80 hover:text-white transition-colors">Цены</a>
                <a href="#contacts" className="block text-white/80 hover:text-white transition-colors">Контакты</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Контакты</h3>
              <div className="space-y-2 text-white/80">
                <p>+7 (900) 123-45-67</p>
                <p>info@spectehservis.ru</p>
                <p>г. Москва, ул. Строительная, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>© 2024 СпецТехСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
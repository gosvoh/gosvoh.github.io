import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "./lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./components/ui/button";
import { ExternalLink, MailIcon } from "lucide-react";
import {
  SiVk,
  SiTelegram,
  SiGithub,
  SiDiscord,
  type IconType,
} from "@icons-pack/react-simple-icons";
import BioconLogo from "./assets/biocon-logo.png";
import ChemLabLogo from "./assets/chem-lab-logo.jpg";
import LmsLogo from "./assets/lms-logo.png";
import { useEffect } from "react";

function ProjectCard({
  title,
  description,
  url,
  github,
  image,
}: {
  title: string;
  description: string;
  url?: string;
  github?: string;
  image?: string;
}) {
  return (
    <Card className="flex flex-col card">
      <CardHeader>
        <CardTitle className="inline-flex items-center gap-4">
          {title}
          {image && (
            <Avatar>
              <AvatarImage
                src={image}
                alt="Фотография Алексея Вохмина на фоне зимнего леса"
              />
            </Avatar>
          )}
        </CardTitle>
        {url && (
          <CardDescription>
            <a href={url} target="_blank">
              {url.replace(/https?:\/\//, "")}
            </a>
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-base md:text-lg">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-row gap-4 mt-auto">
        {url && (
          <Button variant="outline" size="icon" asChild>
            <a href={url} target="_blank">
              <ExternalLink />
            </a>
          </Button>
        )}
        {github && (
          <Button variant="outline" size="icon" asChild>
            <a href={github} target="_blank">
              <SiGithub />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

function SocialLink({ href, Icon }: { href: string; Icon: IconType }) {
  return (
    <Button variant="outline" size="icon-auto" asChild>
      <a href={href} target="_blank">
        <Icon size={32} />
      </a>
    </Button>
  );
}

function App() {
  useEffect(() => {
    const cards = document
      .getElementsByClassName("cards")
      .item(0) as HTMLDivElement | null;
    if (!cards) return;

    const event = (e: MouseEvent) => {
      for (const card of document.getElementsByClassName(
        "card"
      ) as HTMLCollectionOf<HTMLDivElement>) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    cards.addEventListener("mousemove", event);

    return () => {
      cards.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <>
      <header className="flex flex-col md:flex-row gap-4 items-center">
        <Avatar
          className={cn(
            "mx-auto",
            "w-40 h-40",
            "md:w-60 md:h-60",
            "lg:w-80 lg:h-80",
            "xl:w-96 xl:h-96"
          )}
        >
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/8506620"
            alt="Фотография Алексея Вохмина на фоне зимнего леса"
          />
          <AvatarFallback>G</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-right">
          <h1>Алексей Вохмин</h1>
          <h2>React/TypeScript разработчик</h2>
        </div>
      </header>
      <main>
        <section>
          <h2>Обо мне</h2>
          <p>
            React/TypeScript разработчик. Мне нравится создавать интересные и
            полезные веб-приложения. Изучаю новые технологии и методы
            разработки.
          </p>
          <p>
            В настоящее время являюсь сотрудником и студентом магистратуры по
            направлению &#171;Веб-технологии&#187; в{" "}
            <a
              href="https://itmo.ru/"
              target="_blank"
              className="font-bold hover:underline"
            >
              Университете ИТМО
            </a>
            .
          </p>
        </section>
        <section>
          <h2>Контакты</h2>
          <div className="flex flex-row gap-4 justify-center">
            <SocialLink href="mailto:vohmina2011@yandex.ru" Icon={MailIcon} />
            <SocialLink href="https://vk.com/gosvoh" Icon={SiVk} />
            <SocialLink href="https://t.me/gosvoh" Icon={SiTelegram} />
            <SocialLink href="https://github.com/gosvoh" Icon={SiGithub} />
            <SocialLink
              href="https://discord.com/users/237653717690744832"
              Icon={SiDiscord}
            />
          </div>
        </section>
        <section>
          <h2>Проекты</h2>
          <div className="cards grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <ProjectCard
              title="BIOCON"
              description="Веб-сайт международной конференции по промышленной биотехнологии в Альметьевске (Республика Татарстан)"
              url="https://biocon.international"
              github="https://github.com/gosvoh/biocon"
              image={BioconLogo}
            />
            <ProjectCard
              title="SEROVA.CAREERS"
              description="Сайт-визитка Надежды Серовой — карьерного консультанта"
              url="https://serova.careers"
              image="https://serova.careers/favicon.ico"
            />
            <ProjectCard
              title="Kover roller"
              description="Сайт для получения случайного мода с сайта nexusmods, сделан в свободное время для Twitch-стримера @kover_undercover"
              url="https://kover-under-games.vercel.app"
              github="https://github.com/gosvoh/kover_under_games"
              image="https://raw.githubusercontent.com/gosvoh/kover_under_games/main/public/pepe-peepo.gif"
            />
            <ProjectCard
              title="Chem-lab"
              description="Веб-приложение, предназначенное для обучения химии лиц с ограниченными возможностями (ДЦП). Создано в рамках проекта РНФ №22-78-00101"
              url="https://chem-lab.cedne.ru"
              image={ChemLabLogo}
            />
            <ProjectCard
              title="Narupa ITMO SCAMT"
              description="VR приложение для обучения химии в виртуальной реальности с использованием технологии Eye Tracking. Создано в рамках проекта НИР для научной статьи"
              github="https://github.com/gosvoh/ITMO-SCAMT-Ilya"
              url="https://doi.org/10.1021/acs.jchemed.3c00138"
              image="https://raw.githubusercontent.com/gosvoh/ITMO-SCAMT-Ilya/master/Assets/NarupaIMD/Assets/Logos/logo-1024.png"
            />
            <ProjectCard
              title="Get exp for everything"
              description="Модификация для игры Minecraft, добавляющая опыт за действия в игре"
              github="https://github.com/gosvoh/GetExpForEverything"
              url="https://curseforge.com/minecraft/mc-mods/get-exp-for-everything"
              image="https://raw.githubusercontent.com/gosvoh/GetExpForEverything/1.17/src/main/resources/logo.jpeg"
            />
            <ProjectCard
              title="LMS 2.0"
              description="LMS 2.0 — это платформа, предлагающая развитие практических навыков для профессионалов в области кибербезопасности, системного администрирования и т. д. Занимался front-end разработкой"
              url="https://lms.itmo.xyz"
              image={LmsLogo}
            />
            <ProjectCard
              title="Biotech.Industries"
              description="Веб-сайт подразделения факультета биотехнологий Университета ИТМО"
              url="https://biotech.industries"
              image="https://biotech.industries/favicon.ico"
            />
          </div>
        </section>
      </main>
      <footer className="text-center mt-4">
        {new Date().getFullYear()} Алексей Вохмин
      </footer>
    </>
  );
}

export default App;

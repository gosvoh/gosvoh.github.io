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
import { ExternalLink } from "lucide-react";

function ProjectCard({
  title,
  description,
  url,
  github,
}: {
  title: string;
  description: string;
  url?: string;
  github?: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {url && (
          <CardDescription>
            <a href={url} target="_blank">
              {url.replace(/https?:\/\//, "")}
            </a>
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex flex-row gap-2">
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
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 invert"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

function App() {
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
            В настоящее время работаю в{" "}
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
          <h2>Проекты</h2>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <ProjectCard
              title="BIOCON"
              description="Веб-сайт международной конференции по промышленной биотехнологии в Альметьевске (Республика Татарстан)"
              url="https://biocon.international"
              github="https://github.com/gosvoh/biocon"
            />
            <ProjectCard
              title="SEROVA.CAREERS"
              description="Сайт-визитка Надежды Серовой - карьерного консультанта"
              url="https://serova.careers"
            />
            <ProjectCard
              title="Kover roller"
              description="Сайт для получения случайного мода с сайта nexusmods, сделан в свободное время для Twitch-стримера @kover_undercover"
              url="https://kover-under-games.vercel.app"
              github="https://github.com/gosvoh/kover_under_games"
            />
            <ProjectCard
              title="Chem-lab"
              description="Веб-приложение, предназначенное для обучения химии лиц с ограниченными возможностями (ДЦП). Создано в рамках проекта РНФ №22-78-00101"
              url="https://chem-lab.cedne.ru"
            />
            <ProjectCard
              title="Narupa ITMO SCAMT"
              description="VR приложение для обучения химии в виртуальной реальности с использованием технологии Eye Tracking. Создано в рамках проекта НИР для научной статьи"
              github="https://github.com/gosvoh/ITMO-SCAMT-Ilya"
              url="https://doi.org/10.1021/acs.jchemed.3c00138"
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

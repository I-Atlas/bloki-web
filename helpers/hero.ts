import type { HeroProps } from "components/hero";
import fileStructure from "public/images/file-structure.png";
import workspaces from "public/images/workspaces.png";
import libraries from "public/images/libraries.png";
import teams from "public/images/teams.png";

export const heroData: HeroProps[] = [
  {
    sectionId: "file-structure",
    imageDirection: "left",
    image: fileStructure,
    title: "Файловая структура",
    description:
      "В блоки вы можете создать уникальную структуру из файлов, которая поможет вам организовать любую задачу в удобном виде",
    decorationHorizontalAlign: "right",
    decorationVerticalAlign: "center",
  },
  {
    sectionId: "workspaces",
    imageDirection: "right",
    image: workspaces,
    title: "Воркспейсы",
    description:
      "Создавайте неограниченное колличество разных воркспейсовдля разных задач. Будь то занятие математикой ,заметки по работе,идеи по новому проекту",
  },
  {
    sectionId: "teams",
    imageDirection: "left",
    image: teams,
    title: "Команда",
    description:
      "Приглашайте в созданные воркспейсынеогранниченное количество людей и создавайте вместе с ними",
    decorationHorizontalAlign: "right",
    decorationVerticalAlign: "center",
  },
  {
    sectionId: "libraries",
    imageDirection: "right",
    image: libraries,
    title: "Библиотеки",
    description:
      "Вы всегда можете обратиться к готовым библиотекам либозагрузить свои материалыи использовать их",
    decorationHorizontalAlign: "left",
    decorationVerticalAlign: "top",
  },
];

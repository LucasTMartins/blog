import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar | DefaultTheme.NavItemWithLink[] = {
  // SIDEBAR DO EXPLORAR
  "/": [
    {
      text: "Módulos",
      items: [
        { text: "️🚀 Projetos pessoais", link: "/pages/projetos/" },
        { text: "️🔗 Links úteis", link: "/pages/links-uteis" },
        {
          text: "📚 Tutoriais",
          link: "/pages/tutoriais/",
        },
      ],
    },
  ],
};

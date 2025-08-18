import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "./sidebar";

import styles from "./components.module.css";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import Link from "next/link";

interface Key {
  title: string;
  jump?: string;
  keys?: Key[];
}

const menuItems = [
  {
    title: "Introdução",
    url: "/",
    keys: [
      {
        title: "O que é?",
        jump: "oque-e",
      },
      {
        title: "Detalhes Importantes",
        jump: "detalhe-importante",
      },
      {
        title: "Como?",
        jump: "como",
      },
      {
        title: "Por quê?",
        jump: "por-que",
      },
    ],
  },
  {
    title: "Medicamentos",
    url: "/opcoes-dosagens",
    keys: [
          {
            title: "Niveis de Estradiol",
            jump: "niveis-estradiol",
            keys: [
                        {
            title: "Referências",
            jump: "referencias",
          },
            ]
          },
          {
            title: "Oral",
            jump: "oral-dosagem",
          },
          {
            title: "Adesivo",
            jump: "adesivo-dosagem",
          },
          {
            title: "Gel",
            jump: "gel-dosagem",
          },
          {
            title: "Injeção",
            jump: "injecao-dosagem",
          },
          {
            title: "Bloqueadores de Testosterona",
            keys: [
                                  {
            title: "Acetato",
            jump: "acetato",
          },
          {
            title: "Espironolactona",
            jump: "spirogyra",
          },
          {
            title: "Bicalutamida",
            jump: "bica",
          },
            ]
          }
    ]
  },
  {
    title: "Exames de sangue",
    url: "/exame-sangue",
    keys: [
      {
        title: "Acetato",
        jump: "acetato",
      },
      {
        title: "Espironolactona",
        jump: "spiro",
      },
      {
        title: "Bicalutamida",
        jump: "bica",
      },
    ],
  },
  {
    title: "Reajuste de dose",
    url: "/reajuste",
  },
  {
    title: "Manual de aplicação para injetáveis",
    url: "/manual-aplicacao",
  },
];

export default function AppSidebar() {
  const loadMenuItems = () => {
    return menuItems.map((item) => {
      return (
        <SidebarMenuItem className="list-none" key={item.title}>
          <SidebarMenuButton asChild>
            <Link href={item.url} className={styles.sidebarlist}>
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
          {item.keys !== undefined && loadMenuKeys(item.keys, item.url)}
        </SidebarMenuItem>
      );
    });
  };

  const loadMenuKeys = (keys: Key[], url: string) => {
    return (
      <SidebarMenuSub className="list-none">
        {keys.map((value) => loadMenuKey(value, url))}
      </SidebarMenuSub>
    );
  };

  const loadMenuKey = (key: Key, url: string) => {
    if (key.keys !== undefined) {
      return (
        <SidebarMenu className={styles.sidebargroup} key={key.title}>
            <SidebarMenuItem className="list-none">
                <SidebarMenuButton asChild>
                  <Link className={styles.sidebarlist} href={url + key.jump !== undefined ? "#" + key.jump : ""}>
                    <span>{key.title}</span>
                  </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
              {key.keys && loadMenuKeys(key.keys, url)}
        </SidebarMenu>
      );
    }
    return (
      <SidebarMenuSubItem className="list-none" key={key.title}>
        <SidebarMenuSubButton asChild>
          <Link className={styles.sidebarlist} href={url + "#" + key.jump}>
            <span>{key.title}</span>
          </Link>
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    );
  };
  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarMenu className={styles.sidebarmenu}>
          <h1>Índices</h1>
          {loadMenuItems()}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

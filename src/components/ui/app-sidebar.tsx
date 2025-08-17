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
import { Collapsible } from "@radix-ui/react-collapsible";

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
    title: "Opções e Dosagens",
    url: "/opcoes-dosagens",
    keys: [
      {
        title: "Bloqueadores",
        jump: "bloqueadores-testosterona",
      },
      {
        title: "Oral",
        jump: "oral",
      },
      {
        title: "Gel",
        jump: "gel",
      },
      {
        title: "Adesivos",
        jump: "adesivos",
      },
      {
        title: "Injetável",
        jump: "injetavel",
      },
      {
        title: "Niveis de Estradiol",
        jump: "niveis-estradiol",
      },
      {
        title: "Referências",
        jump: "referencias",
      },
      {
        title: "Oral",
        jump: "oral-estradiol",
      },
      {
        title: "Adesivo",
        jump: "adesivo-estradiol",
      },
      {
        title: "Gel",
        jump: "gel-estradiol",
      },
      {
        title: "Injeção",
        jump: "injecao-estradiol",
      },
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
    ],
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
  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarMenu className={styles.sidebarmenu}>
          <h1>Índices</h1>
          {menuItems.map((item) => (
            <SidebarMenuItem className="list-decimal"  key={item.title}>
              <SidebarMenuButton  asChild>
                <a href={item.url} className={styles.sidebarlist}>
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
              {item.keys !== undefined && (
                <SidebarMenuSub className="list-none">
                  {item.keys !== undefined &&
                    item.keys.map((value) => (
                      <SidebarMenuSubItem key={value.title.concat(value.jump)}>
                        <SidebarMenuSubButton asChild>
                          <a
                            className={styles.sidebarlist}
                            href={item.url + "#" + value.jump}
                          >
                            {value.title}
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                </SidebarMenuSub>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

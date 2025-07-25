import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar";

import styles from './components.module.css'

const menuItems = [
  {
    title: "Introdução",
    url: "/",
  },
  {
    title: "Opções e Dosagens",
    url: "/opcoes-dosagens",
  },
  {
    title: "Exames de sangue",
    url: "/exame-sangue",
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
        <SidebarMenu>
          <h1>Índices</h1>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url} className={styles.sidebarlist}>
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

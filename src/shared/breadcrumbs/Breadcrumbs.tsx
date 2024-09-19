import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { BreadcrumbsProps } from "./type"; // Импортируйте типы

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ history }) => {
  // Определяем последний элемент
  const lastItem = history[history.length - 1];
  
  return (
    <div className="mt-[60px] ml-[90px]">
      <Breadcrumb className="text-xs font-normal">
        <BreadcrumbList>
          {history.map((item, index) => (
            <React.Fragment key={item.href}>
              {index < history.length - 1 ? (
                // Отображаем ссылку для всех элементов, кроме последнего
                <BreadcrumbItem className="gap-2">
                  <BreadcrumbLink href={item.href} className="text-gray-600">
                    {item.label}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              ) : (
                // Отображаем текущую страницу как активную
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-[#E1E1E1]">
                    {item.label}
                    <hr className="mt-[2px] border-black border-[1px]" />
                  </BreadcrumbPage>
                </BreadcrumbItem>
              )}

              {/* Отображаем разделитель между элементами, кроме последнего */}
              {index < history.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <Separator orientation="horizontal" className="bg-[#DADADA] mt-5 w-[70%]" />
    </div>
  );
};

export default Breadcrumbs;

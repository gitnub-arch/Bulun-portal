import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";
import { BREADCRUMBS_ITEM } from "./const";
import { Separator } from "@/components/ui/separator";

const Breadcrumbs = () => {
  return (
    <div className="mt-[60px] ml-[90px]">
      <Breadcrumb className="text-xs font-normal">
        <BreadcrumbList>
          {BREADCRUMBS_ITEM.map((item, index)=> (
            <React.Fragment key={item.href}>
              {/* Отображение хлебных крошек, если это не текущая страница */}
              {!item.isCurrentPage ? (
                <BreadcrumbItem>
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                </BreadcrumbItem>
              ) : (
                // Если это текущая страница, используем компонент BreadcrumbPage
                <BreadcrumbItem>
                  <BreadcrumbPage>{item.label}
                    <hr className="mt-[2px] border-black border-[1px]"></hr>
                  </BreadcrumbPage>
                </BreadcrumbItem>
              )}

              {/* Отображение разделителя, кроме последнего элемента */}
              {index < BREADCRUMBS_ITEM.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <Separator orientation="horizontal" className="bg-[#DADADA] mt-5 w-[70%]" />
    </div>
  );
};

export default Breadcrumbs;

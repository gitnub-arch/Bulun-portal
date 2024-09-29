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
import { BreadcrumbsProps } from "./type";

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ history }) => {
  const lastItem = history[history.length - 1];
  
  return (
    <div>
    <div className="max-w-[1250px] mt-[60px] mr-100">
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
                  <BreadcrumbPage className="text-[#8b8989]">
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
    </div>
  );
};

export default Breadcrumbs;

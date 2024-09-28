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
import { ArrowLeft } from "lucide-react"; // Иконка стрелки
import { useNavigate } from "react-router-dom"; // Для перехода

const AcBreadcrumbs: React.FC<BreadcrumbsProps> = ({ history }) => {
  const navigate = useNavigate(); // Хук для навигации

  // Функция для перехода на предыдущую страницу
  const goBack = () => {
    navigate(-1); // Возврат на предыдущую страницу
  };

  return (
    <div className="mt-6 px-6 py-4 bg-white shadow-sm mx-auto max-w-7xl rounded-lg">
      <div className="flex items-center gap-2">
        {/* Стрелка назад с обработчиком клика */}
        <ArrowLeft className="text-blue-500 cursor-pointer" onClick={goBack} />
        <Breadcrumb className="text-sm font-normal">
          <BreadcrumbList className="flex items-center gap-1">
            {history.map((item, index) => (
              <React.Fragment key={item.href}>
                {index < history.length - 1 ? (
                  // Отображаем ссылку для всех элементов, кроме последнего
                  <BreadcrumbItem className="gap-2">
                    <BreadcrumbLink href={item.href} className="text-blue-500">
                      {item.label}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                ) : (
                  // Отображаем текущую страницу как активную
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-gray-400">
                      {item.label}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                )}

                {/* Отображаем разделитель между элементами, кроме последнего */}
                {index < history.length - 1 && (
                  <BreadcrumbSeparator className="text-gray-400 mx-1">
                    ›
                  </BreadcrumbSeparator>
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default AcBreadcrumbs;

import * as React from "react";

import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { BreadcrumbsProps } from "./type";

const AcBreadcrumbs: React.FC<BreadcrumbsProps> = ({ history }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="mt-6 px-6 py-4 bg-white shadow-sm mx-auto max-w-[1140px] rounded-lg">
      <div className="flex items-center gap-2">
        <ArrowLeft className="text-blue-500 cursor-pointer" onClick={goBack} />
        <Breadcrumb className="text-sm font-normal">
          <BreadcrumbList className="flex items-center gap-1">
            {history.map((item, index) => (
              <React.Fragment key={item.href}>
                {index < history.length - 1 ? (
                  <BreadcrumbItem className="gap-2">
                    <BreadcrumbLink href={item.href} className="text-blue-500">
                      {item.label}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                ) : (
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-gray-400">
                      {item.label}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                )}
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

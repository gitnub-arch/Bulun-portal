import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";

  
  const Breadcrumbs = () =>{
    return (
      <Breadcrumb className="text-[--orange] text-xs font-normal">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-[ --orange]">Главная</BreadcrumbLink> 
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbEllipsis className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem className=" --orange">Новости</DropdownMenuItem>
                <DropdownMenuItem>Объявления</DropdownMenuItem>
                <DropdownMenuItem>Афиша</DropdownMenuItem>
                <DropdownMenuItem>Транспорт</DropdownMenuItem>
                <DropdownMenuItem>Форум</DropdownMenuItem>
                <DropdownMenuItem>Администрация</DropdownMenuItem>
                <DropdownMenuItem>Архив</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Архив</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  }

  export default Breadcrumbs;

  
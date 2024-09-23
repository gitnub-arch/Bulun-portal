import { ArrowDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";
import { NEWSPAPER_ITEM } from "./const";

const News = () => {
  return (
    <div className="bg-[#F4F4F4] pt-8">
    <div className="container m-auto w-[877px]">
      <Separator className="mb-[20px] bg-[#E1E1E1]" />
      <div className="flex justify-between">
        <h2 className="font-normal text-2xl">Газета «Маяк Арктики»</h2>
        <div className="flex">
          <h4 className="mt-[7px] mr-2">Фильтр: </h4>
          <Select>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Сначала новые" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Сначала новые">Сначала новые</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-7 mb-6 mt-[20px]">
        {NEWSPAPER_ITEM.map((newspaper) => (
          <div className="flex p-2 rounded-[6px] bg-[#ffffff] min-w-[410px]">
            <div className="bg-[#E7E7E7] w-[70px] h-[62px] rounded-md mr-4" />
            <div className="mt-2">
              <h5 className="font-medium text-[#333333] text-base">
                {newspaper.title} №{newspaper.numbering}
              </h5>
              <span className="mr-6 font-normal text-xs text-[#A2A2A2]">
                {newspaper.data}
              </span>
              <span className="font-base text-xs">Теги:</span>
              <span className="font-normal text-xs text-[#A2A2A2]">
                {" "}
                {newspaper.tegs}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <h3 className="mb-16 text-[#A2A2A2] font-normal text-xs">
          ПОКАЗАТЬ ЕЩЕ
        </h3>
        <ArrowDown className="text-[#A2A2A2] w-4 h-4 ml-1" />
      </div>
    </div>
    </div>
  );
};

export default News;

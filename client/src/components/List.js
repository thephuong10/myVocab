import React, { useCallback, useEffect, useState } from "react";
import vocabApi from "../apis/vocabApi";
import { isArray } from "../utils/handle";
import Listitem from "./ListItem";
import Search from "./Search";

const List = () => {
  const [vocabList, setvocabList] = useState({
    root: [],
    filters: [],
  });

  useEffect(() => {
    (async () => {
      const result = await vocabApi.getAll();
      setvocabList(() => ({
        root: result,
        filters: result,
      }));
    })();
  }, []);

  const handleAddVocab = useCallback(
    (vocab) => {
      (async () => {
        try {
          const result = await vocabApi.create(vocab);
          vocabList.root.push(result);
          setvocabList((old) => ({
            ...old,
          }));
          alert("Thêm  thành công !");
        } catch (error) {
          console.log({ ...error });
          alert("Thêm không thành công !");
        }
      })();
    },
    [JSON.stringify(vocabList)]
  );

  const handleEditVocab = useCallback(
    (id, vocab) => {
      (async () => {
        try {
          await vocabApi.update({ _id: id, ...vocab });
          const indexRoot = vocabList.root.findIndex((i) => i._id === id);
          const indexFilters = vocabList.filters.findIndex((i) => i._id === id);
          vocabList.root[indexRoot] = {
            _id: id,
            ...vocab,
          };
          vocabList.filters[indexFilters] = {
            _id: id,
            ...vocab,
          };
          setvocabList(() => ({
            root: [...vocabList.root],
            filters: [...vocabList.filters],
          }));
          alert("Cập nhật thành công !");
        } catch (error) {
          console.log({ ...error });
          alert("Cập nhật không thành công !");
        }
      })();
    },
    [JSON.stringify(vocabList)]
  );

  const handleRemoveVocab = useCallback(
    (id) => () => {
      (async () => {
        try {
          await vocabApi.remove(id);
          setvocabList(() => [...vocabList].filter((i) => i._id !== id));
          alert("Xóa thành công !");
        } catch (error) {
          console.log({ ...error });
          alert("Xóa không thành công !");
        }
      })();
    },
    [JSON.stringify(vocabList)]
  );

  const handleSearch = (search) => {
    const result = vocabList.root.filter(
      (i) =>
        i.name.toLowerCase().includes(search.toLowerCase()) ||
        i.mean.toLowerCase().includes(search.toLowerCase())
    );
    setvocabList((old) => ({
      ...old,
      filters: result,
    }));
  };

  console.log(vocabList);

  return (
    <>
      <Search onAddVocab={handleAddVocab} onSearch={handleSearch} />
      <div className="rounded-md bg-white px-[20px] py-[40px] shadow-xl mt-8 min-h-[150px] max-h-[300px] overflow-y-auto">
        {isArray(vocabList.filters) ? (
          <>
            {vocabList.filters.map((item) => (
              <Listitem
                key={item._id}
                item={item}
                onEdit={handleEditVocab}
                onRemove={handleRemoveVocab}
              />
            ))}
          </>
        ) : (
          <div className="w-[100%] h-[100%] flex items-center justify-center">
            <p className="text-[16px] font-[500]">Chưa có từ vựng nào</p>
          </div>
        )}
      </div>
    </>
  );
};

export default List;

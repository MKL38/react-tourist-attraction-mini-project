import { useEffect, useState } from "react";
import axios from "axios";

const TouristActraction = () => {
  const [searchInput, setSearchInput] = useState("");
  const [destinationDetail, setDestinationDetail] = useState([]);

  useEffect(() => {
    destinationFetchData(searchInput);
  }, [searchInput]);

  const destinationFetchData = async (text) => {
    try {
      const url =
        text.trim() === ""
          ? "http://localhost:4001/trip"
          : `http://localhost:4001/trip?keywords=${text}`;
      const getData = await axios.get(url);
      setDestinationDetail(getData.data.data);
      console.log(destinationDetail);
    } catch (error) {
      console.log("error fetching");
    }
  };

  return (
    <div className="MainContainer flex flex-col justify-center w-auto m-10 ">
      <h1 className="Headertext text-blue-500 text-2xl text-center">
        เที่ยวที่ไหนดี
      </h1>
      <label className="text-sm" htmlFor="TouristSearch">
        ค้นหาที่น่าเที่ยว
      </label>
      <input
        className="border-b-[1px] border-black text-center focus:outline-none "
        type="text"
        name="searchTextInput"
        id="searchInput"
        placeholder="หาที่เที่ยวแล้วไปกัน"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />

      <div className="Search-result-container mt-5">
        <div class="p-6">
          {destinationDetail.map((item) => {
            <div class="max-w-4xl mx-auto p-4 bg-white rounded-md shadow-md flex flex-col md:flex-row gap-6" key={eid}>
              {/* <!-- Left: Main Image Placeholder --> */}

              <div class="md:w-1/2">
                <div class="bg-gray-200 rounded-md h-64 w-full"><img src={item.photos[0]} alt="" /></div>
              </div>

              {/* <!-- Right: Text Content --> */}
              <div class="md:w-1/2 space-y-2">
                {/* <!-- Title --> */}
                <h2 class="text-xl font-semibold text-gray-800">{item.title}</h2>

                {/* <!-- Description --> */}
                <p class="text-gray-600 text-sm ">{item.description}</p>

                {/* <!-- Read More Link --> */}
                <a href={item.url} class="text-blue-500 hover:underline">
                  อ่านต่อ
                </a>

                {/* <!-- Categories/Tags --> */}
                {destinationDetail.tags.map((item, index) => {
                  <div
                    class="flex items-center gap-2 text-sm text-gray-500"
                    key={index}
                  >
                    <span>หมวด:</span>
                    <a href="#" class="text-blue-500 hover:underline">
                      {item}
                    </a>
                  </div>;
                })}

                {/* <!-- Thumbnails --> */}
                <div class="flex gap-2">
                  <div class="bg-red-200 w-16 h-16 rounded-md"><img src={item.photos[1]} alt="" /></div>
                  <div class="bg-gray-200 w-16 h-16 rounded-md"><img src={item.photos[2]} alt="" /></div>
                  <div class="bg-gray-200 w-16 h-16 rounded-md"><img src={item.photos[3]} alt="" /></div>
                </div>
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default TouristActraction;

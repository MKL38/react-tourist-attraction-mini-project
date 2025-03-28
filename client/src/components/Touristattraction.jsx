import { useEffect, useState } from "react";
import axios from "axios";

const TouristActraction = () => {
  const [searchInput, setSearchInput] = useState("");
  const [destinationDetail, setDestinationDetail] = useState([]);

  useEffect(() => {
    destinationFetchData(searchInput);
  }, [searchInput]);


  /// Data fetching 
  const destinationFetchData = async (text) => {
    try {
      // const url =
      //   text.trim() === ""
      //     ? "http://localhost:4001/trips?"
      //     : `http://localhost:4001/trips?keywords=${text}`;
      const getData = await axios.get(`http://localhost:4001/trips?keywords=${text}`);
      setDestinationDetail(getData.data.data);
    } catch (error) {
      console.log("error fetching");
    }
  };

  /// Onclick for tags to populate input 
  const handleTagClick = (tag) => {
    const newSearchInput  = searchInput? searchInput + " " + tag: tag;;
    setSearchInput(newSearchInput);
  };

  return (
    <div className="MainContainer flex flex-col justify-center w-auto m-10">
      <h1 className="Headertext text-blue-500 text-5xl font-extrabold text-center mb-7">
        เที่ยวไหนดี
      </h1>
      <label className="text-sm ml-6 mb-4" htmlFor="TouristSearch">
        ค้นหาที่น่าเที่ยว
      </label>
      <input
        className="border-b-[1px] border-black text-center focus:outline-none mx-6 "
        type="text"
        name="searchTextInput"
        id="searchInput"
        placeholder="หาที่เที่ยวแล้วไปกัน"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <div className="Search-result-container mt-5">
        <div className="p-6">
          {destinationDetail.map((item, index) => {
            return (
              <div
                className="max-w-4xl mx-auto p-4 bg-white rounded-md shadow-md flex flex-col md:flex-row gap-6 mt-6"
                key={item.eid || index}
              >
                {/* Left: Main Image */}
                <div className="md:w-1/3">
                  <div className="bg-gray-200 rounded-3xl  h-52 w-full md:max-w-[300px] ">
                    <img src={item.photos[0]} alt="" className="w-full h-full object-cover rounded-3xl" />
                  </div>
                </div>

                {/* Right: Text Content */}
                <div className="md:w-2/3 space-y-2 ">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm">
                  {item.description && item.description.length > 100? item.description.substring(0, 100) + "..." :  item.description}
                  </p>
                  <a href={item.url} className="text-blue-500 hover:underline">
                    อ่านต่อ
                  </a> <br />
                  
                  {/* Categories/Tags */}
                  <span className="text-sm text-gray-500 mr-3">หมวด</span>
                  {item.tags && item.tags.map((tag, idx) => {
                    return (
                      <span className="flex-row  gap-2 text-sm text-gray-500" key={idx} onClick={() => handleTagClick(tag)} >
                       <a href="#" className="text-gray-500 underline mr-2 cursor-pointer"> {tag}  </a>
                      </span>
                    );
                  })}

                  {/* Thumbnails */}
                  <div className="flex gap-2">
                    {item.photos.slice(1, 4).map((photo, idx) => (
                      <div key={idx} className="bg-gray-200 w-16 h-16 rounded-xl">
                        <img src={photo} alt="" className="w-full h-full object-cover rounded-xl" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TouristActraction;

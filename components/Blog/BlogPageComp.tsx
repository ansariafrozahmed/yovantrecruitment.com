"use client";
import React, { useState, useEffect } from "react";
import BlogCardSkeleton from "../Skeletons/BlogCardSkeleton";
import BlogCard from "../Home/BlogCard";

const BlogPageComp = () => {
  const [data, setData] = useState<any[]>([]);
  const [pagination, setPagination] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 9;

  const fetchAllProductsWithPagination = async (page: number = 1) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.BACKEND}/wp-json/custom/v1/posts?posts_per_page=${perPage}&page=${page}`
      );

      if (!response.ok) {
        console.error("Error fetching products:", response.statusText);
        setLoading(false);
        return [];
      }

      const result = await response.json();
      setData(result.data);
      setPagination(result.pagination);
    } catch (error) {
      console.error("Network or server error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    fetchAllProductsWithPagination(currentPage); // Fetch products when page changes
  }, [currentPage]);

  // Handle page change event
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchAllProductsWithPagination(page); // Fetch products for the selected page
  };

  return (
    <div className="templateContainer py-10 md:py-8 lg:py-12 space-y-4">
      {/* Header with total products */}
      <div
        data-aos="fade-up"
        className="flex gap-0.5 items-center justify-between pt-0 pb-4 "
      >
        <p className="text-sm font-medium tracking-wider">
          Showing{" "}
          <span className="text-lightGolden font-bold">
            {data?.length >= 10 ? data.length : `0${data.length}` || 0}
          </span>{" "}
          of{" "}
          <span className="text-lightGolden font-bold">
            Total{" "}
            {pagination?.total_posts >= 10
              ? pagination.total_posts
              : `0${pagination?.total_posts || 0}` || 0}{" "}
          </span>
          Products
        </p>
        <div></div>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
        {loading ? (
          <>
            {Array(perPage)
              .fill(perPage)
              .map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
          </>
        ) : (
          data.map((product, index) => <BlogCard data={product} key={index} />)
        )}
      </div>

      {/* Pagination component */}
      {pagination && (
        <div className="flex justify-center items-center mt-6 gap-8">
          <button
            className={`text-white flex items-center `}
            onClick={() => handlePageChange(pagination.current_page - 1)}
            disabled={pagination.current_page === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide lucide-chevron-right rotate-180 ${
                pagination.current_page === 1
                  ? "text-gray-700 cursor-not-allowed"
                  : ""
              }`}
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <div className="space-x-4">
            {Array.from({ length: pagination.total_pages }, (_, i) => (
              <button
                key={i + 1}
                className={`${
                  currentPage === i + 1
                    ? "text-lightGolden font-bold border border-lightext-lightGolden h-8  w-8 rounded-md"
                    : "text-white"
                }`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            className="text-white flex items-center"
            onClick={() => handlePageChange(pagination.current_page + 1)}
            disabled={pagination.current_page === pagination.total_pages}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide lucide-chevron-right  ${
                pagination.current_page === pagination.total_pages
                  ? "text-gray-700 cursor-not-allowed"
                  : ""
              }`}
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogPageComp;

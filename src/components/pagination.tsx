'use client';

import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export function Pagination({ totalPages, currentPage }: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage: number, endPage: number;

    if (totalPages <= maxPagesToShow) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const maxPagesBeforeCurrentPage = Math.floor(maxPagesToShow / 2);
      const maxPagesAfterCurrentPage = Math.ceil(maxPagesToShow / 2) - 1;

      if (currentPage <= maxPagesBeforeCurrentPage) {
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        startPage = totalPages - maxPagesToShow + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Link
          key={i}
          href={`/blog?page=${i}`}
          className={cn(
            buttonVariants({
              variant: currentPage === i ? 'default' : 'outline',
              size: 'icon',
            })
          )}
        >
          {i}
        </Link>
      );
    }
    return pageNumbers;
  };

  return (
    <nav className="flex items-center gap-2">
      <Link
        href={`/blog?page=${currentPage - 1}`}
        className={cn(
          buttonVariants({
            variant: 'outline',
            size: 'icon',
          }),
          currentPage === 1 && 'pointer-events-none opacity-50'
        )}
      >
        <ChevronLeft className="h-4 w-4" />
      </Link>

      {renderPageNumbers()}

      <Link
        href={`/blog?page=${currentPage + 1}`}
        className={cn(
          buttonVariants({
            variant: 'outline',
            size: 'icon',
          }),
          currentPage === totalPages && 'pointer-events-none opacity-50'
        )}
      >
        <ChevronRight className="h-4 w-4" />
      </Link>
    </nav>
  );
}

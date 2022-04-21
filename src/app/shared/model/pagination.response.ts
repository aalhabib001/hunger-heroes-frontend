export interface PaginationResponse<T> {
    pageNo: number;
    pageSize: number;
    totalPages: number;
    totalElements: number;
    items: number;
    isLast: boolean;
    data: T[];
}

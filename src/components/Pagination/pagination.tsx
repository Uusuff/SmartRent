import classNames from 'classnames';
import styles from './Pagination.module.scss';

interface Props {
  total: number;
  currentPage: number;
  onPageChange: (p: number) => void;
  isMapOpened: boolean;
}

export const Pagination = ({
  total,
  currentPage,
  onPageChange,
  isMapOpened,
}: Props): JSX.Element => {
  const totalPages = Math.ceil(total / 8);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 8) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push('...');
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    pages.push(totalPages);

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <ul
      className={`${styles.pagination} ${isMapOpened && styles[`pagination--mapOpened`]}`}
    >
      <a
        href="#prev"
        className={classNames(
          styles.pagination__button,
          styles[`pagination__button--prev`],
          {
            [styles['pagination__button--prev-disabled']]: currentPage === 1,
          },
        )}
        onClick={e => {
          e.preventDefault();
          if (currentPage > 1) {
            onPageChange(currentPage - 1);
          }
        }}
        aria-disabled={currentPage === 1}
      ></a>

      <ul className={styles.pagination__itemList}>
        {pages.map((page, idx) => (
          <li
            key={idx}
            className={classNames(styles.pagination__item, {
              [styles['pagination__item--active']]: currentPage === page,
            })}
          >
            {page === '...' ? (
              <a
                href="#ellipsis"
                className={`${styles.pagination__link}`}
                onClick={e => {
                  e.preventDefault();
                  if (idx === 1) {
                    onPageChange(Math.max(currentPage - 3, 1));
                  } else {
                    onPageChange(Math.min(currentPage + 3, totalPages));
                  }
                }}
              >
                …
              </a>
            ) : (
              <a
                data-cy="pageLink"
                className={classNames(styles.pagination__link, {})}
                href={`#${page}`}
                onClick={e => {
                  e.preventDefault();
                  onPageChange(Number(page));
                }}
              >
                {page}
              </a>
            )}
          </li>
        ))}
      </ul>

      <a
        href="#next"
        className={classNames(
          styles.pagination__button,
          styles[`pagination__button--next`],
          {
            [styles['pagination__button--next-disabled']]:
              currentPage === totalPages,
          },
        )}
        onClick={e => {
          e.preventDefault();
          if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
          }
        }}
        aria-disabled={currentPage === totalPages}
      ></a>
    </ul>
  );
};

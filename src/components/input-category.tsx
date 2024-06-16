'use client';

import {
  usePathname,
  useSearchParams,
} from 'next/navigation';

import { ChangeEvent, useEffect, useState } from 'react';
import { Input } from './ui/input';

export function InputCategory() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();

  const [name, setName] = useState<string>('');

  const setParams = (
    key: string,
    value: string | number,
  ) => {
    params.set(key, value.toString());
  };

  useEffect(() => {
    setParams('name', name);
    setParams('page', 1);
    history.replaceState(
      null,
      '',
      `${pathname}?${params.toString()}`,
    );
  }, [name]);

  const handleFilter = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name: key, value } = e.target;
    setName(value);
  };

  return (
    <Input
      type="text"
      className="focus-visible:ring-[#00AA5B]"
      placeholder="Name of the user"
      id="name"
      name="name"
      value={name}
      onChange={handleFilter}
    />
  );
}

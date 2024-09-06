import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import { Button } from '../ui';
import { User, ShoppingCart, ArrowRight } from 'lucide-react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex flex-wrap justify-between p-3 gap-5">
        <div className="flex items-center gap-4">
          <Image src={Logo} alt="Logo" width={36} height={36}></Image>
          <div>
            <h1 className="text-2xl uppercase font-black">XpiZZa</h1>
            <p className="text-sm text-gray-400 leading-3">
              пицца как Вы любите
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            <p className='hidden sm:block'>Войти</p>
          </Button>

          <div>
            <Button className="group relative">
              <b className='hidden sm:block'>520₽</b>
              <span className="h-full w-[1px] bg-white/30 mx-1 hidden sm:block"></span>
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                <b className='hidden sm:block'>3</b>
              </div>
              <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

// trscp typescript react component with props

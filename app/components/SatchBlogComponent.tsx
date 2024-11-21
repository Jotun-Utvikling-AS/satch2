// `components` object you'll pass to PortableText

import Link from "next/link";

// `components` object you'll pass to PortableText
export const RichTextComponents = {
  types: {
    image: ({ value, isInline }) => {
      const { width, height } = getImageDimensions(value);
      return (
        <img
          src={imageBuilder.image(value).url()}
          alt={value.alt || " "}
          loading='lazy'
          className={`my-8 mx-auto ${
            isInline ? "max-w-xs" : "max-w-full"
          } rounded-lg shadow-lg`}
          style={{ aspectRatio: width / height }}
        />
      );
    },
  },

  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => (
      <h1 className='text-2xl text-red-400 whitespace-pre-line'>{children}</h1>
    ),
    blockquote: ({ children }) => (
      <blockquote className='border-l-purple-500 whitespace-pre-line'>
        {children}
      </blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => (
      <h2 className='text-lg text-primary text-purple-700 whitespace-pre-line'>
        {children}
      </h2>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className='text-4xl font-bold my-4 whitespace-pre-line'>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className='text-3xl font-bold my-4 whitespace-pre-line'>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className='text-2xl font-bold my-4 whitespace-pre-line'>
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className='border-l-4 pl-4 my-4 italic text-gray-700 border-gray-300 whitespace-pre-line'>
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className='list-disc ml-8 my-4 whitespace-pre-line'>{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className='list-decimal ml-8 my-4 whitespace-pre-line'>{children}</ol>
    ),
    li: ({ children }) => (
      <li className='mb-2 my-4 whitespace-pre-line'>{children}</li>
    ),
    p: ({ children }) => (
      <p className='text-xl my-4 whitespace-pre-line'>{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className='text-blue-500 hover:text-blue-700 whitespace-pre-line'>
          {children}
        </Link>
      );
    },
  },
};
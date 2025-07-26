import Image from 'next/image';

export default function TestAccessibility() {
  return (
    <div>
      <h1>Test Page</h1>
      {/* This should trigger an accessibility warning */}
      <Image
        src="/test.jpg"
        width={100}
        height={100}
      />
      <button onClick={() => console.log('clicked')}>
        Button without proper event handling
      </button>
    </div>
  );
}

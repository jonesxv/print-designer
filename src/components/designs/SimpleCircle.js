import React from 'react';

const SimpleCircle = (props) => {
  const {color1} = props;
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 493.79 469.46">
      <path d="M424,74.28c-22.18-19.49-48.7-34.49-78.82-44.6-29.26-9.82-61.25-14.79-95.09-14.79s-65.88,4.84-95,14.41C124.9,39.22,98.37,54,76.24,73.3c-47.78,41.62-73,102.59-73,176.32,0,42.63,7.49,80.45,22.28,112.41a192,192,0,0,0,58.65,73.16c53.48,40.63,119.77,49.16,166,49.16a287.62,287.62,0,0,0,86.8-13.24c30-9.47,56.69-23.54,79.47-41.81C469.12,387,497,324.86,497,249.62,497,176.86,471.76,116.23,424,74.28Zm9,64,8.38,18.5-12.21,15.77,19.26-.2,8.11,17.89-38.76-2.5-21.75,29.73-8.3-18.33,11.76-15.4-19.18-1-8-17.56,38.14,3.88Zm-21.23-26.83-46.88,47-12.79-12.77,46.88-47Zm-89.37-57,15.13,6.66,3.16,38.19,13.57-30.82,15.4,6.78L342.94,136l-15.58-6.86-2.78-37.85L311.07,122l-15.39-6.78ZM289.36,180.35a39.61,39.61,0,0,1-3.22,15.74c-9.44-8.59-21.2-14.56-35-17.77a79.26,79.26,0,0,1-3.44-19.06c14.8,1.1,32.86,9.57,41.42,17A40.35,40.35,0,0,1,289.36,180.35Zm-61.71,14.33a66.64,66.64,0,0,1-13.16,5.53,40,40,0,0,1,5.79-47.49C219.13,166.41,222.09,183.34,227.65,194.68ZM250.1,183a79.37,79.37,0,0,1,18.21,6.57c-8.34,12.25-24.71,23.64-35.42,27.34a40.33,40.33,0,0,1-15.65-12.53C229.39,200.5,240.45,193.31,250.1,183Zm-.67-42.73a40,40,0,0,1,38.32,28.84c-11.29-7.89-27.46-13.82-40.1-14.67A67,67,0,0,1,249.43,140.27Zm-.43-.54Zm23.51,52.19a66.1,66.1,0,0,1,11.37,8.63,40.09,40.09,0,0,1-44.11,18.73C252.23,213.46,265.45,202.44,272.51,191.92Zm-31.62-81.58,3.76-65.52,43.77,2.52-.87,15.35-25.74-1.48-.56,9.9,22.27,1.28-.88,15.26-22.27-1.28-.59,10.28,25.73,1.48-.89,15.45-43.77-2.52Zm3.56,30.22c-2.71,12.49-2,25.66,2.13,39.18a79.75,79.75,0,0,1-14.79,12.47c-6.44-13.34-8.14-33.18-6-44.29A40.06,40.06,0,0,1,244.45,140.56ZM165.14,61.35a8.26,8.26,0,0,1,5.23-3.74l32.31-8.38a7.92,7.92,0,0,1,10.13,6l12.48,48.13a8,8,0,0,1-6,10.14L187,121.84a9.82,9.82,0,0,1-2.42.32,7.73,7.73,0,0,1-4-1.06,8.21,8.21,0,0,1-3.75-5.22L164.41,67.74A8.27,8.27,0,0,1,165.14,61.35ZM100.59,98.8l16,19,11-9.3-16-19,13.9-11.7,42.73,50.76-13.9,11.7-16.6-19.72-11,9.3,16.59,19.72-13.89,11.7L86.69,110.5ZM59.71,151.51A8,8,0,0,1,70.12,147l31,12.29a8.24,8.24,0,0,1,4.51,10.42l-8.2,20.7,15.74,6.23-6.69,16.9L44.82,189.11ZM41.05,284.13,39,260l38.72-3.23,2,23.86c.27,3.15-1.57,5.33-4.44,5.57l-8.61.72c-2.63.22-5.3-1.29-6.46-4.78-.56,3.63-2.8,5.84-5.39,6.05l-8.43.71C43.37,289.13,41.31,287.28,41.05,284.13Zm3.3,20.81,37.48-10.22,6.68,24.49-8.05,2.19L76.4,306.52l-6.55,1.79,3.51,12.88-8,2.18-3.51-12.88-6.77,1.85,4.06,14.88L51,329.43ZM71,370.1l-4.87-8.75,8.45-4.71-4.29-7.7-8.45,4.71L57,344.9l30-16.7A4.33,4.33,0,0,1,93.17,330l9.61,17.25A4.33,4.33,0,0,1,101,353.4Zm35.11,31.66a4.45,4.45,0,0,1-6.35,0l-14-13.59a4.37,4.37,0,0,1-.1-6.27l20.93-21.55a4.41,4.41,0,0,1,6.23-.05l14,13.59a4.51,4.51,0,0,1,.21,6.3l-7,7.19-7.19-7,3.77-3.88a.62.62,0,0,0,.07-.81l-5.24-5.1a.64.64,0,0,0-.9,0l-14.55,15a.59.59,0,0,0,0,.85l5.25,5.1a.58.58,0,0,0,.77-.06l3.85-4,7.18,7Zm37.36,27.58-8.82-4.76L142,411l-8.36-4.5-7.32,13.58-8.81-4.76L136,381.13l8.82,4.75L137.72,399l8.36,4.51,7-13.08,8.81,4.76Zm49.32,14.78-9.45-2-2.84-40.36L191,404l.09,25.27,11.56-22.76,9.68,2.08ZM244,445.21a4.32,4.32,0,0,1-4.84,4.23l-19.93-1.32a4.32,4.32,0,0,1-4.23-4.84l2-29.69a4.31,4.31,0,0,1,4.83-4.23l19.93,1.32a4.32,4.32,0,0,1,4.24,4.84ZM259,449.5l-2.9-38.75,9.93-.74,2.27,30.36,12.34-.92.63,8.38Zm22.78-112-1.64-.16c-1.17-.34-2.31-.67-3.42-1,.16,1.14.24,2.36.3,3.62.06,1,0,2.72.11,3.77.33,3,1.15,4.32,2.05,6.81a.42.42,0,0,1,0,.33.52.52,0,0,1-.27.19c-2.93,1.2-5.72.79-7.23-.36l-.17-.12c-2-1.55-3.51-4.87-5.77-2.89-.07.22.54,1.09,1,1.73a18.61,18.61,0,0,1,2.68,5,11.92,11.92,0,0,1-.32,8.27,22.36,22.36,0,0,1-2.19,4.2c-.37.54-1.89,2.9-2.83,2.64a6.05,6.05,0,0,1-.29-.79,5.57,5.57,0,0,0-.9-2,1.92,1.92,0,0,0-1.83-.84c-.13,0-1.34.09-1.38-.06.17.71.41,1.52.62,2.26a13.61,13.61,0,0,1,.51,2,14.34,14.34,0,0,1-1.43,7.17c-.15.28-.3.56-.47.83a8.18,8.18,0,0,1-.45.69,11.11,11.11,0,0,1-2.06,2.16c-1,.82-2.36,1.22-3.44,2-.39.27-.74.62-1.16.86-.11.07-1.09.49-1.09.49-.13-.4.61-1.67.77-2.09a26.24,26.24,0,0,0,1.09-3.57c.57-2.79.26-3.44-1-4.27-1-.71-3.67-.3-5,1.11-.81.83-1.24,2.31-.54,4.92-3.11-2.08-5.54-4.79-6.24-7a15.78,15.78,0,0,1,0-7.85,9.12,9.12,0,0,1-1.54.32c-1.64.25-3.19.49-3.83,3a.39.39,0,0,1-.29.28.35.35,0,0,1-.37-.13l-.59-.71c-1.75-2.15-3-3.7-3.72-5.6a13.77,13.77,0,0,1-.5-8.36,15.64,15.64,0,0,1,3-5.37c.48-.63,1.08-1.4,1-1.62-2.25-2-4.5,1.15-6.4,2.31-.32.2-.65.42-1,.65-1.61,1.07-3.79.85-5.76-.28-.1-.06-.22-.1-.28-.21a.43.43,0,0,1,0-.35l.11-.23a44.28,44.28,0,0,0,2.33-5.44c.58-1.81.36-3.76.37-5.63,0-.75-.38-.67-1-.61a17.55,17.55,0,0,1-2.05.06c-.87,0-1.75-.08-2.61-.08-1.28,0-2.57,0-3.85-.07a35.84,35.84,0,0,1-3.58-.35,21.42,21.42,0,0,1-7.84-2.81.41.41,0,0,1-.17-.46.38.38,0,0,1,.4-.27c1.72.17,2.51-1.8,2.91-2.93l-.18-.17c-1.78-1.83-4-4.1-6.8-5.21a10.11,10.11,0,0,0-1.95-.56,40.42,40.42,0,0,1-6.08.39l-.55.15a.39.39,0,0,1-.42-.15,1.06,1.06,0,0,0-.25,0,17.67,17.67,0,0,1-6.8-1.64l-1-.43a28.48,28.48,0,0,1-5.32-2.83A61.2,61.2,0,0,1,170,316a.4.4,0,0,1-.09-.49.39.39,0,0,1,.46-.18,40.49,40.49,0,0,0,7.74,1.76l.76.11c4.27.66,6.79,0,7.5-2-1.47-1.86-3.45-2.65-5.51-3.36a24.69,24.69,0,0,0-3.94-.89c-.89-.15-1.81-.31-2.75-.53a27.5,27.5,0,0,1-6.7-2.34,21.37,21.37,0,0,1-5.79-4.32,15.63,15.63,0,0,1-2.34-3.89c-.38-.78-.76-1.58-1.22-2.38-.18-.33-.39-.68-.6-1.05a41.42,41.42,0,0,1-2.86-5.61.4.4,0,0,1,.11-.45.36.36,0,0,1,.45,0c.87.6,1.7,1.27,2.52,1.92a21.83,21.83,0,0,0,3.5,2.48,21,21,0,0,0,5.25,1.62c.5.1,1,.2,1.45.31a17,17,0,0,0,5.48.17l1.31-.1,1.5-.07c.65,0,1.28-.06,1.91-.11-.32-.83-.64-1.55-1-2.21-1.32-2.74-3-3.39-5.07-3.95a39.42,39.42,0,0,1-6.59-2.41,17.79,17.79,0,0,1-5.69-4.16l-.73-.76a29.81,29.81,0,0,1-3.9-4.7,63.78,63.78,0,0,1-3.38-5.9.4.4,0,0,1,.1-.49.37.37,0,0,1,.48,0,41.29,41.29,0,0,0,6.51,4.62l.67.41c3.71,2.27,6.3,2.62,7.69,1a11.26,11.26,0,0,0-3.86-5.26,24.8,24.8,0,0,0-3.32-2.35c-.77-.49-1.56-1-2.34-1.56a28.71,28.71,0,0,1-5.35-4.77,22.05,22.05,0,0,1-3.76-6.25,16,16,0,0,1-.74-4.51c-.06-.87-.12-1.76-.24-2.67-.06-.38-.11-.79-.17-1.21a42.81,42.81,0,0,1-.59-6.31.41.41,0,0,1,.28-.37.37.37,0,0,1,.42.16c.58.88,1.11,1.83,1.62,2.75a21.89,21.89,0,0,0,2.33,3.66,21.09,21.09,0,0,0,4.26,3.53c.43.29.84.58,1.23.86a17.13,17.13,0,0,0,5,2.29c.42.14.84.27,1.25.42l1.41.51a27.45,27.45,0,0,0,5.16,1.53c.47.08.93.18,1.4.28a39.59,39.59,0,0,0-8.54-14.2c-3.55-3.79-7.55-7.55-9.43-12.43a17,17,0,0,1-1.11-7.59,28.52,28.52,0,0,1,2.11-7.27.39.39,0,0,1,.36-.25.4.4,0,0,1,.35.26,34,34,0,0,0,2.16,4.53c.31.57.61,1.13.88,1.67a22.07,22.07,0,0,0,3.68,5.58A7.66,7.66,0,0,0,167,231s-2.5-12-4.44-16.67A22.3,22.3,0,0,1,161,201a35.43,35.43,0,0,1,2.73-7.47c.3-.66.6-1.38.9-2.12a33.39,33.39,0,0,1,2.59-5.34.36.36,0,0,1,.41-.17.38.38,0,0,1,.28.36c.14,2.57.47,4.85.76,6.86.08.53.15,1,.21,1.49l.18,1.29c.39,3,.67,5.13,1.41,6.6,1.1,2.23,2.64,2.94,4.6,3.85.48.22,1,.46,1.51.73l.09,0c.74.39,1.77.84,2.75,1.25a19,19,0,0,1,2.85,1.52c.18-.09.71-.26.77-.45a.74.74,0,0,0-.06-.28l-.18-1-.3-1.53-.47-2.41a65.08,65.08,0,0,1-1.27-13.5c.09-2.71.37-5.58,2.18-7.71,3.21-3.78,10.15-10.86,10.15-10.86l3.66-3.61a17.92,17.92,0,0,1,4.52-3.25c.78-.4,1.6-.82,2.18-1.15,0,0-.73,3.15-.79,3.53-.26,1.79-.5,3.58-.69,5.38-1.11,10.36-.12,21.63,4.6,31.06a34,34,0,0,0,4.32,6.32l.7.85a19.84,19.84,0,0,0,4.49,4.52.41.41,0,0,1,.17.27.42.42,0,0,1-.07.31c-5.55,7.24-5.39,19.42-4.4,28a123.1,123.1,0,0,0,3.85,18.91,8,8,0,0,0,5.07,5.43c.45.16.89.36,1.33.55,1.22.53,2.44,1.07,3.69,1.52a16,16,0,0,0,1.89.61,2.93,2.93,0,0,0,2.16,0,2.58,2.58,0,0,0,.5-.43,8.53,8.53,0,0,0,1.24-1.5,4,4,0,0,0,.35-.91l1-3.66L234.4,259l.82-3a3.7,3.7,0,0,0,.14-1.15c0-1-.17-2.73-.86-2.43-.33.15-1.95,1.25-1.95,1.25,0-.5.06-1.09.09-1.64a7.24,7.24,0,0,1,1.53-4.17,3.06,3.06,0,0,1,.9-.83,26.3,26.3,0,0,1,10.39-2.27c4.65-.16,11.35,1.13,13.53,2.59a18.46,18.46,0,0,0,5.85,2.83,33.12,33.12,0,0,1,3.31,1.22,2.43,2.43,0,0,1,1.23,1.6c0,.07,0,.14,0,.19a2.74,2.74,0,0,1,.08.7l0,1.57a12.17,12.17,0,0,1-.47,3.45l-.39,1.39c-.59-1.43-3.07-2.21-4.48-2.54a2.42,2.42,0,0,0-1.8.26l-1.07.62a.73.73,0,0,0-.34.83l1.53,5.3a14,14,0,0,0,.92,2.4l1.37,2.79a6.31,6.31,0,0,0,1.59,2,.91.91,0,0,0,.84.15l10.68-3.42a8,8,0,0,0,5.08-5.43,123.1,123.1,0,0,0,3.85-18.91c1-8.55,1.15-20.73-4.4-28a.42.42,0,0,1-.07-.31.41.41,0,0,1,.17-.27,19.84,19.84,0,0,0,4.49-4.52l.69-.85A34,34,0,0,0,292,204.1c4.72-9.43,5.71-20.7,4.6-31.06-.19-1.8-.43-3.59-.69-5.38-.06-.38-.79-3.53-.79-3.53.68.38,1.69.9,2.6,1.36a14.67,14.67,0,0,1,3.73,2.68l4,4s6.94,7.08,10.15,10.86c1.81,2.13,2.09,5,2.18,7.71a65.08,65.08,0,0,1-1.27,13.5l-.47,2.41-.3,1.53c-.06.33-.12.65-.19,1,0,.07-.07.22-.05.28s.59.36.77.45a19,19,0,0,1,2.85-1.52c1-.41,2-.86,2.75-1.25l.09,0c.52-.27,1-.51,1.51-.73,2-.91,3.5-1.62,4.6-3.85.74-1.47,1-3.62,1.41-6.6l.18-1.29c.06-.47.13-1,.2-1.49a68.66,68.66,0,0,0,.76-6.86.4.4,0,0,1,.29-.36.36.36,0,0,1,.41.17,33.39,33.39,0,0,1,2.59,5.34c.3.74.6,1.46.9,2.12a36,36,0,0,1,2.73,7.47A22.3,22.3,0,0,1,336,214.31C334.1,219,331.6,231,331.6,231a7.66,7.66,0,0,0,5.23-1.92,22.07,22.07,0,0,0,3.68-5.58c.27-.54.57-1.1.88-1.67a35.31,35.31,0,0,0,2.16-4.53.4.4,0,0,1,.35-.26.39.39,0,0,1,.36.25,28.52,28.52,0,0,1,2.11,7.27,17,17,0,0,1-1.11,7.59c-1.88,4.88-5.88,8.64-9.43,12.43a39.59,39.59,0,0,0-8.54,14.2c.47-.1.93-.2,1.4-.28a27.45,27.45,0,0,0,5.16-1.53l1.41-.51c.41-.15.83-.28,1.25-.42a17.13,17.13,0,0,0,5-2.29c.39-.28.8-.57,1.23-.86a21.09,21.09,0,0,0,4.26-3.53,21.89,21.89,0,0,0,2.33-3.66c.51-.92,1-1.87,1.62-2.75a.37.37,0,0,1,.42-.16.41.41,0,0,1,.28.37,42.81,42.81,0,0,1-.59,6.31c-.06.42-.12.83-.17,1.21-.12.91-.18,1.8-.25,2.67a15.66,15.66,0,0,1-.73,4.51,22.05,22.05,0,0,1-3.76,6.25,28.71,28.71,0,0,1-5.35,4.77c-.78.57-1.57,1.07-2.34,1.56a25.58,25.58,0,0,0-3.33,2.35,11.31,11.31,0,0,0-3.85,5.26c1.39,1.57,4,1.22,7.69-1l.67-.41a40.8,40.8,0,0,0,6.5-4.62.38.38,0,0,1,.49,0,.4.4,0,0,1,.1.49,63.78,63.78,0,0,1-3.38,5.9,29.81,29.81,0,0,1-3.9,4.7l-.73.76a17.79,17.79,0,0,1-5.69,4.16,39.42,39.42,0,0,1-6.59,2.41c-2.07.56-3.75,1.21-5.07,3.95-.32.66-.64,1.38-1,2.21.63.05,1.26.08,1.91.11l1.5.07,1.31.1a16.9,16.9,0,0,0,5.47-.17c.47-.11,1-.21,1.46-.31a20.89,20.89,0,0,0,5.24-1.62,21.44,21.44,0,0,0,3.51-2.48c.81-.65,1.65-1.32,2.51-1.92a.38.38,0,0,1,.46,0,.4.4,0,0,1,.11.45,41.42,41.42,0,0,1-2.86,5.61c-.21.37-.42.72-.6,1.05-.46.8-.85,1.6-1.22,2.38a15.63,15.63,0,0,1-2.34,3.89,21.37,21.37,0,0,1-5.79,4.32,27.5,27.5,0,0,1-6.7,2.34c-.94.22-1.86.38-2.75.53a24.69,24.69,0,0,0-3.94.89c-2.07.71-4,1.5-5.51,3.36.71,2,3.23,2.68,7.5,2l.76-.11a40.49,40.49,0,0,0,7.74-1.76.39.39,0,0,1,.46.18.41.41,0,0,1-.09.49,61.2,61.2,0,0,1-5.31,4.14,28.48,28.48,0,0,1-5.32,2.83l-1,.43a17.67,17.67,0,0,1-6.8,1.64,1.18,1.18,0,0,0-.26,0,.37.37,0,0,1-.41.15l-.55-.15a39.93,39.93,0,0,1-6.06-.39,9.54,9.54,0,0,0-2,.56c-2.8,1.11-5,3.38-6.8,5.21l-.18.17c.4,1.13,1.19,3.1,2.91,2.93a.38.38,0,0,1,.4.27.41.41,0,0,1-.17.46,21.42,21.42,0,0,1-7.84,2.81,35.84,35.84,0,0,1-3.58.35C284.37,337.47,283.08,337.41,281.8,337.45Zm12.55,108.31L286,407.81l9.73-2.14,6.53,29.74,12.08-2.65,1.81,8.21ZM329.3,437l-14.36-36.11,23.59-9.38,3.08,7.76-14.33,5.7,2.51,6.31,12.41-4.93,3.06,7.7-12.41,4.93,2.6,6.53,14.33-5.7,3.11,7.81Zm44.36-21-6.24-9.54-4.34,2.84a4.54,4.54,0,0,1-6.18-1.46l-12.51-19.12,8.38-5.48,9.8,15a.68.68,0,0,0,.85.13l6.69-4.38c.29-.19.18-.46,0-.7l-9.8-15,8.38-5.49,12.52,19.13a4.55,4.55,0,0,1-1.14,6.25l-4.29,2.8,6.24,9.54Zm45.64-39.33-16.43,17.82-28.55-26.35,16.23-17.59c2.14-2.33,5-2.44,7.11-.49l6.34,5.85c1.95,1.79,2.64,4.78.85,8,3.06-2,6.2-1.88,8.1-.13l6.22,5.74C421.41,371.53,421.45,374.3,419.3,376.62Zm22.23-35.23-8.6-4.41-4,7.83,8.6,4.42-4.57,8.91-30.52-15.67a4.31,4.31,0,0,1-2-6.12l9-17.57a4.33,4.33,0,0,1,6.12-2l30.52,15.67Zm10.21-25.48-37.64-9.63,2.47-9.65,29.5,7.55,3.07-12,8.14,2.08Zm-31.17-38.59.83-9.92,30.34,2.54,1-12.33,8.37.7-1.87,22.26Z" transform="translate(-3.21 -14.89)" fill={color1} />
      <path d="M251.32,249.56c-.12.05-1,.39-.63.66a8.83,8.83,0,0,0,2.1,1.37c.88.35,4.17-.28,4.17-.28l.09,0a8,8,0,0,0-3.62-2A3.56,3.56,0,0,0,251.32,249.56Z" transform="translate(-3.21 -14.89)" fill={color1} />
      <path d="M89.48,339.66a1.17,1.17,0,0,0-1.6-.49l-10.21,5.68,4.29,7.7,10.21-5.69a1.22,1.22,0,0,0,.33-1.76Z" transform="translate(-3.21 -14.89)" fill={color1} />
      <path d="M70.5,166.69c-.09,0-.25,0-.28.05l-4.41,11.14,17.53,6.94,4.41-11.14a.28.28,0,0,0-.09-.19Z" transform="translate(-3.21 -14.89)" fill={color1} />
      <path d="M235,418.66l-7.87-.52a.62.62,0,0,0-.56.6l-1.38,20.84a.55.55,0,0,0,.48.55l7.87.52a.57.57,0,0,0,.66-.47l1.39-20.85A.64.64,0,0,0,235,418.66Z" transform="translate(-3.21 -14.89)" fill={color1} />
      <path d="M192.84,104.34l12.74-3.3a.4.4,0,0,0,.29-.23L197.11,67a.37.37,0,0,0-.16-.21.39.39,0,0,0-.18,0h-.08l-12.75,3.31a.52.52,0,0,0-.06.37l8.76,33.79A.22.22,0,0,0,192.84,104.34Z" transform="translate(-3.21 -14.89)" fill={color1} />
      <path d="M398.67,364l-5-4.61a.59.59,0,0,0-.86,0l-6.08,6.6,5.92,5.46,6.09-6.6A.56.56,0,0,0,398.67,364Z" transform="translate(-3.21 -14.89)" fill={color1} />
      <path d="M64.29,277.45l6.77-.56a.6.6,0,0,0,.58-.63l-.75-8.95-8,.67.75,8.95A.56.56,0,0,0,64.29,277.45Z" transform="translate(-3.21 -14.89)" fill={color1} />
      <path d="M404.85,369.71a.59.59,0,0,0-.86,0l-6.09,6.6,6.31,5.81,6.08-6.6a.53.53,0,0,0,0-.81Z" transform="translate(-3.21 -14.89)" fill={color1} />
      <path d="M48.57,278.76l7.34-.61a.59.59,0,0,0,.59-.63l-.75-8.94-8.55.71.75,8.95A.53.53,0,0,0,48.57,278.76Z" transform="translate(-3.21 -14.89)" fill={color1} />
      <path d="M413.4,328.51,410.56,334a1.18,1.18,0,0,0,.47,1.6l10.4,5.33,4-7.83-10.4-5.34A1.22,1.22,0,0,0,413.4,328.51Z" transform="translate(-3.21 -14.89)" fill={color1} />
    </svg>
  );
};

export default SimpleCircle;
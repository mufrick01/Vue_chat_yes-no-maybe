import { ref } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoMaybeResponse } from '@/interfaces/yes-no-maybe.response';
import { sleep } from '@/helpers/sleep';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const getResponse = async () => {
    const resp = await fetch('https://yesno.wtf/api');
    const data = (await resp.json()) as YesNoMaybeResponse;

    return data;
  };

  const onMessage = async (text: string) => {
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });

    if (!text.trim().endsWith('?')) return;

    await sleep(2);

    const newMsg = await getResponse();
    const { answer, image } = newMsg;

    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image,
    });
  };

  return {
    // properties
    messages,

    // methods
    onMessage,
  };
};

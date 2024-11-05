<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>el adivino del si/no/quizás</span>
    </div>

    <!-- List of Messages -->
    <ChatMessages :messages="messages" />

    <!-- Box for write message -->
    <MessageBox @send-message="onMessage" />

  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chats/ChatMessages.vue';
import MessageBox from '@/components/chats/MessageBox.vue';
import { useChat } from '@/composables/useChats';


const { messages, onMessage } = useChat()


</script>

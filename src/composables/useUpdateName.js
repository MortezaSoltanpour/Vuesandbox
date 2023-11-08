// import { ref, reactive } from "vue";

// export const useUpdater = () => {
//   const name = ref("morteza");

//   const info = reactive({
//     name: "morteza",
//     lastname: "soltanpour",
//   });

//   function updateName() {
//     name.value = "مرتضی سلطانپور";
//     info.name = "سهیلا";
//     info.lastname = "یوسفی";
//   }

//   return { name, info, updateName };
// };

import { ref, reactive } from "vue";

export default function (p) {
  const name = ref("morteza");

  const info = reactive({
    name: "morteza",
    lastname: "soltanpour",
  });

  function updateName() {
    name.value = "مرتضی سلطانپور";
    info.name = "سهیلا";
    info.lastname = `${"یوسفی"} ${p}`;
  }

  return { name, info, updateName };
}
// export default useUpdater;

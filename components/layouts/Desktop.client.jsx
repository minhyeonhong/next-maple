"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Footer from "./footer/Footer.client";
import * as THREE from "three";
import { app } from "@/axios/app";

const Desktop = ({ children }) => {
  const pathname = usePathname();

  const adWrapRef = useRef(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();

  // useEffect(() => {
  //     // adWrapRef.current가 정의되어 있는지 확인
  //     if (adWrapRef.current) {
  //         // adWrapRef의 div 안에 렌더러를 추가
  //         adWrapRef.current.appendChild(renderer.domElement);
  //     }

  //     renderer.setSize(adWrapRef.current.clientWidth, adWrapRef.current.clientHeight);
  //     // 큐브의 geometry 생성
  //     const geometry = new THREE.BoxGeometry(1, 1, 1);
  //     // 큐브의 material 생성
  //     const material = new THREE.MeshBasicMaterial({ color: 0xFFC7DE });
  //     // 큐브 mesh 생성
  //     const cube = new THREE.Mesh(geometry, material);
  //     // 큐브의 라인 생성
  //     const edges = new THREE.EdgesGeometry(geometry);
  //     const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xc6c6c6 }));

  //     // 큐브와 라인을 함께 추가
  //     const group = new THREE.Group();
  //     group.add(cube);
  //     group.add(line);

  //     // scene에 큐브와 라인 추가
  //     scene.add(group);

  //     camera.position.z = 5;

  //     function animate() {
  //         requestAnimationFrame(animate);

  //         // 큐브 회전
  //         cube.rotation.x += 0.01;
  //         cube.rotation.y += 0.01;

  //         // 라인 위치 및 회전 업데이트
  //         line.rotation.copy(cube.rotation);
  //         line.position.copy(cube.position);

  //         // 렌더링
  //         renderer.render(scene, camera);
  //     }

  //     animate();

  //     // cleanup 함수 설정
  //     return () => {
  //         // 렌더러를 제거
  //         adWrapRef.current.removeChild(renderer.domElement);
  //     };
  // }, [])

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await app.get("/api/mongo-test");
    console.log(res);
    if (res.data.success) {
      setUsers(res.data.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name,email);
    const res = await app.post("/api/mongo-test", { name, email });
    if (res.data.success) {
      setName("");
      setEmail("");
      getUsers();
    }
  };

  return (
    <div className="w-[100%] h-[100%] px-[5%] grid grid-cols-3">
      <div ref={adWrapRef} className="w-full h-full col-span-2 bg-purple-100">
        <div>
          <h1>Users</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Add User</button>
          </form>
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="min-w-[530px] bg-[#FFF] shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
        <div className=" h-[90%] px-[2%]">{children}</div>
        <Footer pathname={pathname}></Footer>
      </div>
    </div>
  );
};

export default Desktop;
